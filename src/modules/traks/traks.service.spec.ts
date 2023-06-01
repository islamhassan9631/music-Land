import { Test, TestingModule } from '@nestjs/testing';
import { TraksService } from './traks.service';

describe('TraksService', () => {
  let service: TraksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TraksService],
    }).compile();

    service = module.get<TraksService>(TraksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
