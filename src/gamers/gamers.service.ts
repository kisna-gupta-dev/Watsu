import { Injectable } from '@nestjs/common';
import { CreateGamerDto } from './dto/create-gamer.dto';
import { UpdateGamerDto } from './dto/update-gamer.dto';

@Injectable()
export class GamersService {
  create(createGamerDto: CreateGamerDto) {
    return 'This action adds a new gamer';
  }

  findAll() {
    return `This action returns all gamers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gamer`;
  }

  update(id: number, updateGamerDto: UpdateGamerDto) {
    return `This action updates a #${id} gamer`;
  }

  remove(id: number) {
    return `This action removes a #${id} gamer`;
  }
}
