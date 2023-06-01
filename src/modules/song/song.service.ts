import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SongService {
  constructor(private prisma: PrismaService) { }
   async create(createSongDto: CreateSongDto) {
    try {

      const song = await this.prisma.song.create({data:{...createSongDto,
        singerAlbumId:+createSongDto.singerAlbumId,
        singersId:+createSongDto.singersId,
        rate:+createSongDto.rate
      } 
        
      }

      )
      return song
    } catch(e) { 
      return e.message
    }
  }

  findAll() {
    return `This action returns all song`;
  }

  findOne(id: number) {
    return this.prisma.song.findUnique({where: {id: id}})
  }

  update(id: number, updateSongDto: UpdateSongDto) {
   return this.prisma.song.update({data:{...updateSongDto,
    singerAlbumId:+updateSongDto.singerAlbumId,
        singersId:+updateSongDto.singersId,
        rate:+updateSongDto.rate

   } ,where: {id: id}});
  }

  remove(id: number) {
   try{
    return this.prisma.song.delete({where:{id: id}})
   }catch(e){

   }
  }
}
