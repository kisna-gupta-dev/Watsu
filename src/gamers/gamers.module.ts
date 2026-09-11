import { Module } from '@nestjs/common';
import { GamersService } from './gamers.service';
import { GamersController } from './gamers.controller';

@Module({
  controllers: [GamersController],
  providers: [GamersService],
})
export class GamersModule {}
