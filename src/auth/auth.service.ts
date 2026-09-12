import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { SignupDtoGamer ,SignupDtoCafe} from './dto/signup.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService,} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Role } from 'generated/prisma/enums';
@Injectable()
export class AuthService {

  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService, 
  ) {}

  async signupGamer(SignupDtoGamer: SignupDtoGamer) {
    const user = await this.signup(SignupDtoGamer,Role.GAMER);
    await this.prisma.gamerProfile.create({
      data:{
        userId:user.id,
        displayName:SignupDtoGamer.displayName,
        avatarUrl: SignupDtoGamer.avatarUrl ?  SignupDtoGamer.avatarUrl : "",
        city:SignupDtoGamer.city,
      },
    });
    return this.generateTokens(user.id, user.role);
  }


  async signup(SignupDto, role){
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: SignupDto.email,
      },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }
    const hashedPassword = await bcrypt.hash(SignupDto.password, 10);
    return await this.prisma.user.create({
      data: {
        email: SignupDto.email,
        password: hashedPassword,
        role: role,
      },
  });
}

  async signupCafe(SignupDtoCafe: SignupDtoCafe) {
    const user = await this.signup(SignupDtoCafe,Role.CAFE_OWNER)
    const owner = await this.prisma.cafeOwnerProfile.create({
      data:{
       userId:user.id,
       businessName:SignupDtoCafe.businessName,
       phone:SignupDtoCafe.phoneNumber 
      }
    })
    await this.prisma.cafe.create({
      data:{
        ownerId: owner.id,
        name: SignupDtoCafe.businessName,
        address:SignupDtoCafe.address,
        city:SignupDtoCafe.city
      }
    })
    return this.generateTokens(user.id, user.role);
  }

  async login(loginDto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: loginDto.email },
    });
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.generateTokens(user.id, user.role);
  }

  async refresh(userId:string, refreshToken: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user || !user.refreshToken) {
      throw new UnauthorizedException('Invalid refresh token');
    }
    const isRefreshTokenValid = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!isRefreshTokenValid) {
      throw new UnauthorizedException('Invalid refresh token');
    }

    return this.generateTokens(user.id, user.role);
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: null },
    });
    console.log("Logged Out");
    return true;
  }

  private async generateTokens(userId: string, role: string) {
    const payload = { userId, role };
    const accessToken = await this.jwtService.signAsync(payload, { expiresIn: '15m' });
    const refreshToken = await this.jwtService.signAsync(payload, { expiresIn: '7d' });

    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken: hashedRefreshToken },
    });
    return { accessToken, refreshToken };
  }


}
