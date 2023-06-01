import { Test, TestingModule } from '@nestjs/testing';
import { FavoreteService } from './favorete.service';

describe('FavoreteService', () => {
  let service: FavoreteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoreteService],
    }).compile();

    service = module.get<FavoreteService>(FavoreteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
