import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateGamerDto } from './create-gamer.dto';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateDto {
    @ApiProperty({example:'gamer@123'})
    @IsString()
    @IsOptional()
    displayname?:string;

    @ApiProperty({example:'www.randomeimage.com'})
    @IsString()
    @IsOptional()
    avatarUrl?:string;

    @ApiProperty({example:'Indore'})
    @IsString()
    @IsOptional()
    city?:string;

    @ApiProperty({example:'user@example.com'})
    @IsEmail()
    @IsString()
    @IsOptional()
    email?:string;
}