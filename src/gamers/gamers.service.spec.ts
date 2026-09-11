import { Test, TestingModule } from '@nestjs/testing';
import { GamersService } from './gamers.service';

describe('GamersService', () => {
  let service: GamersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamersService],
    }).compile();

    service = module.get<GamersService>(GamersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
