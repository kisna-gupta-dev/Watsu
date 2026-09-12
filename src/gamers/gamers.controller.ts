import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { GamersService } from './gamers.service';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateDto } from './dto/update-gamer.dto';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';


@Controller('gamers')
export class GamersController {
  constructor(private readonly gamersService: GamersService) {}

  @Get('me')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  findGamerById(@Req() req) {
    return this.gamersService.findGamerById(req.user.userId);
  }

  @Patch('me')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  updateInfo(@Req() req, @Body() UpdateDto : UpdateDto) {
    return this.gamersService.updateInfo(req.user.userId,UpdateDto);
  }

  @Get(':displayName')
  gamerPublicData(@Param('displayName') displayName:string){
    console.log(displayName)
    return this.gamersService.getGamerPublicData(displayName);
  }

  @Get('me/history')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  matchHistory(@Req() req){
    return this.gamersService.matchHistory(req.user.userId);
  }

  //Not so much required
  @Get('me/titles')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  titlesHeld(@Req() req){
    return this.gamersService.titlesHeld(req.user.userId);
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateGamerDto: UpdateGamerDto) {
  //   return this.gamersService.update(+id, updateGamerDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.gamersService.remove(+id);
  // }
}
