import { Test, TestingModule } from '@nestjs/testing';
import { MusicionService } from './musicion.service';

describe('MusicionService', () => {
  let service: MusicionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicionService],
    }).compile();

    service = module.get<MusicionService>(MusicionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
