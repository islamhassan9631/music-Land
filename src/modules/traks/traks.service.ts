import { playlist } from '@prisma/client';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateTrakDto } from './dto/create-trak.dto';
import { UpdateTrakDto } from './dto/update-trak.dto';
import { SongService } from '../song/song.service';
import { MusicService } from '../music/music.service';
import { PlaylistService } from '../playlist/playlist.service';


@Injectable()
export class TraksService {
  link:string
  constructor(private prisma:PrismaService,private song:SongService,private music:MusicService,private playlist:PlaylistService){}
   async create(createTrakDto: CreateTrakDto) {

  
 
    
   
     const playlist=await this.playlist.findOne(createTrakDto.playlistId)
     const newplaylist=playlist
if(createTrakDto.songId){
   const song=await this.song.findOne(createTrakDto.songId)
   if(!song){
    throw new Error ("No song found")
   }
   this.link =song.sources
}
if(createTrakDto.musicId){
  const muisic=await this.music.findOne(createTrakDto.musicId)
  if(!muisic){
   throw new Error ("No muisic found")
  }
  this.link=muisic.sources
}
     const trak=await this.prisma.traks.create({data:{...createTrakDto,
    link:this.link,
    playlistId:createTrakDto.playlistId,
    songId:createTrakDto.songId,
    musicId:createTrakDto.musicId,
    title:createTrakDto.title
   

     
    }})
return trak
    }


  findAll() {
    return `This action returns all traks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trak`;
  }

  update(id: number, updateTrakDto: UpdateTrakDto) {
    return `This action updates a #${id} trak`;
  }

  remove(id: number) {
    return `This action removes a #${id} trak`;
  }
}
