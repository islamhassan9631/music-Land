import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';


import { MusicionModule } from './modules/musicion/musicion.module';

import { PlaylistModule } from './modules/playlist/playlist.module';
import { SongModule } from './modules/song/song.module';
import { MusicModule } from './modules/music/music.module';

import { MusicionAlbumModule } from './modules/musicion-album/musicion-album.module';

import { UserModule } from './modules/user/user.module';
import { TraksModule } from './modules/traks/traks.module';

import { SingerAlbumModule } from './modules/singer-album/singer-album.module';
import { SingersModule } from './modules/singers/singers.module';

import { FavoreteModule } from './modules/favorete/favorete.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';
import { ProfileModule } from './modules/profile/profile.module';


@Module({
  imports: [PrismaModule,  MusicionModule,  PlaylistModule, SongModule, MusicModule,  MusicionAlbumModule, UserModule, FavoreteModule, SingersModule, SingerAlbumModule, TraksModule, AuthModule, ProfileModule,
// MulterModule.register({
//   dest:"./uploads"
// })


  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
