import { Test, TestingModule } from '@nestjs/testing';
import { TraksController } from './traks.controller';
import { TraksService } from './traks.service';

describe('TraksController', () => {
  let controller: TraksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TraksController],
      providers: [TraksService],
    }).compile();

    controller = module.get<TraksController>(TraksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
