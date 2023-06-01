import { Test, TestingModule } from '@nestjs/testing';
import { MusicionController } from './musicion.controller';
import { MusicionService } from './musicion.service';

describe('MusicionController', () => {
  let controller: MusicionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicionController],
      providers: [MusicionService],
    }).compile();

    controller = module.get<MusicionController>(MusicionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
