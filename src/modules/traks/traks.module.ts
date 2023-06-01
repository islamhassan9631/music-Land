import { Module } from '@nestjs/common';
import { TraksService } from './traks.service';
import { TraksController } from './traks.controller';
import { SongService } from '../song/song.service';
import { MusicService } from '../music/music.service';
import { PlaylistService } from '../playlist/playlist.service';

@Module({
  imports:[],
  controllers: [TraksController],
  providers: [TraksService,SongService,MusicService,PlaylistService]
})
export class TraksModule {}
