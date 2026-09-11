import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamersService } from './gamers.service';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';

@Controller('gamers')
export class GamersController {
  constructor(private readonly gamersService: GamersService) {}

  @Post()
  create(@Body() createGamerDto: CreateGamerDto) {
    return this.gamersService.create(createGamerDto);
  }

  @Get()
  findAll() {
    return this.gamersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGamerDto: UpdateGamerDto) {
    return this.gamersService.update(+id, updateGamerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gamersService.remove(+id);
  }
}
