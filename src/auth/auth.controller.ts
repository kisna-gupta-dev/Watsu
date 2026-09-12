// auth.controller.ts
import { Body, Controller, Post, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { SignupDtoCafe, SignupDtoGamer } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('gamer/signup')
  @ApiOperation({ summary: 'Register a new Gamer' })
  signupGamer(@Body() dto: SignupDtoGamer) {
    return this.authService.signupGamer(dto);
  }

  @Post('cafe/signup')
  @ApiOperation({ summary: 'Register a new cafe' })
  signupCafe(@Body() dto: SignupDtoCafe) {
    return this.authService.signupCafe(dto);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login with email and password' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @Post('logout')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Invalidate refresh token' })
  logout(@Req() req) {
    return this.authService.logout(req.user.userId);
  }
}