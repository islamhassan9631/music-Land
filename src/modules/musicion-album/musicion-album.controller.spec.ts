import { Test, TestingModule } from '@nestjs/testing';
import { MusicionAlbumController } from './musicion-album.controller';
import { MusicionAlbumService } from './musicion-album.service';

describe('MusicionAlbumController', () => {
  let controller: MusicionAlbumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicionAlbumController],
      providers: [MusicionAlbumService],
    }).compile();

    controller = module.get<MusicionAlbumController>(MusicionAlbumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
