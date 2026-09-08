import { IsEmail, IsNotEmpty, IsString,IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/client';

export class SignupDto {
    @ApiProperty({
        example: 'user@example.com',
    })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({
        example: 'password@123',
    })
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty({
        example: Role.GAMER,
        enum: Role,
    })
    @IsEnum(Role)
    role: Role;
}