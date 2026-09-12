import { Module } from '@nestjs/common';
import { GamersService } from './gamers.service';
import { GamersController } from './gamers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],           // ✅ modules go here
  controllers: [GamersController],
  providers: [GamersService],        // ✅ only actual injectables here
})
export class GamersModule {}