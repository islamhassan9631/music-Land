import { musicType } from './dto/eunms/musicType';
import { Injectable } from '@nestjs/common';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MusicService {
  constructor(private prisma: PrismaService) { }
  async create(createMusicDto: CreateMusicDto) {
    try {
      const music = await this.prisma.music.create({
        data: {
          ...createMusicDto,
          MusicionId: +createMusicDto.MusicionId,
          musicionAlbumId: +createMusicDto.musicionAlbumId,
          rate: +createMusicDto.rate
        }
      })
      return music;
    } catch (e) {
      return e.message;
    }
  }

  findAll() {
    return this.prisma.music.findMany()
  }

  findOne(id: number) {
    return this.prisma.music.findUnique({ where: { id: id },include:{
Musicion:true,
musicionAlbum:true
    } })
    
  }

  update(id: number, updateMusicDto: UpdateMusicDto) {
    return this.prisma.music.update({
      data: {
        ...updateMusicDto,
        MusicionId: +updateMusicDto.MusicionId,
        musicionAlbumId: +updateMusicDto.musicionAlbumId,
        rate: +updateMusicDto.rate
      },where:{ id:id}
    })
  }

  remove(id: number) {
    return this.prisma.music.delete({where:{ id:id}})
  }
}
