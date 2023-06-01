import { Injectable } from '@nestjs/common';
import { CreatePlaylistDto } from './dto/create-playlist.dto';
import { UpdatePlaylistDto } from './dto/update-playlist.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PlaylistService {
  constructor(private prisma:PrismaService){}
 async create(createPlaylistDto: CreatePlaylistDto) {
   const playlist=await this.prisma.playlist.create({data:{...createPlaylistDto,
    userId:+createPlaylistDto.userId} })
    return playlist
  }

 async findAll() {
    try{
      const platlist=await this.prisma.playlist.findMany()
      if(!platlist ) throw new Error('Playlist not found')
      return platlist
    }catch(e){
      return e.message
    }
  }

async  findOne(id: number) {
    try{
      const platlist=await this.prisma.playlist.findUnique({where:{id:id},include:{
        traks:true
      }})
      if(!platlist ) throw new Error('Playlist not found')
      return platlist
    }catch(e){
      return e.message
    }
  }

  update(id: number, updatePlaylistDto: UpdatePlaylistDto) {
    return `This action updates a #${id} playlist`;
  }

  remove(id: number) {
    return `This action removes a #${id} playlist`;
  }
}
