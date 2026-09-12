import { IsEmail, IsNotEmpty, IsString,IsEnum, IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'generated/prisma/client';

export class SignupDtoGamer {
    
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

    @ApiProperty({example:'Gamer@123'})
    @IsString()
    @IsNotEmpty()
    displayName:string;

    @ApiProperty({example:'www.randomimage.com'})
    @IsString()
    avatarUrl:string;

    @ApiProperty({example:'Indore'})
    @IsString()
    city:string;
    
}

export class SignupDtoCafe{

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
        example: 'Watsu Gaming Cafe',
    })
    @IsString()
    @IsNotEmpty()
    businessName:string;

    @ApiProperty({
        example: '23, Near Your moms house',
    })
    @IsString()
    @IsNotEmpty()
    address:string;

    @ApiProperty({
        example: 'Indore',
    })
    @IsString()
    @IsNotEmpty()
    city:string;
    
    @ApiProperty({
        example: '9211291700',
    })
    @IsString()
    @IsNotEmpty()
    phoneNumber:string;

}