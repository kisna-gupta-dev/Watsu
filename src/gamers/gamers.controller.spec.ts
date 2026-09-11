import { Test, TestingModule } from '@nestjs/testing';
import { GamersController } from './gamers.controller';
import { GamersService } from './gamers.service';

describe('GamersController', () => {
  let controller: GamersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamersController],
      providers: [GamersService],
    }).compile();

    controller = module.get<GamersController>(GamersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
