import { Global, Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
@Global()
@Module({
  controllers: [SongController],
  providers: [SongService],
   exports:[SongService]
})
export class SongModule {}
