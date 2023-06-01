import { Module } from '@nestjs/common';
import { MusicionAlbumService } from './musicion-album.service';
import { MusicionAlbumController } from './musicion-album.controller';

@Module({
  controllers: [MusicionAlbumController],
  providers: [MusicionAlbumService]
})
export class MusicionAlbumModule {}
