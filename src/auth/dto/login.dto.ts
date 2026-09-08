import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/client';

export class LoginDto {

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

   
}
