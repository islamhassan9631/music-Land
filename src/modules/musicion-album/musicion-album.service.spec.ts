import { Test, TestingModule } from '@nestjs/testing';
import { MusicionAlbumService } from './musicion-album.service';

describe('MusicionAlbumService', () => {
  let service: MusicionAlbumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicionAlbumService],
    }).compile();

    service = module.get<MusicionAlbumService>(MusicionAlbumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
