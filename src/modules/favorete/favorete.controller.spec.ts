import { Test, TestingModule } from '@nestjs/testing';
import { FavoreteController } from './favorete.controller';
import { FavoreteService } from './favorete.service';

describe('FavoreteController', () => {
  let controller: FavoreteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoreteController],
      providers: [FavoreteService],
    }).compile();

    controller = module.get<FavoreteController>(FavoreteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
