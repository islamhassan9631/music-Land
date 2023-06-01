import { Injectable } from '@nestjs/common';
import { CreateSingerAlbumDto } from './dto/create-singer-album.dto';
import { UpdateSingerAlbumDto } from './dto/update-singer-album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SingerAlbumService {
  constructor(private prisma:PrismaService){}
 async create(createSingerAlbumDto: CreateSingerAlbumDto) {
    try{
      const singerAlbum=await this.prisma.singerAlbum.create({data: createSingerAlbumDto})
      return singerAlbum
    }catch(err){
      return err.message
    }
  }

 async findAll() {
    try{
      const singerAlbum=await this.prisma.singerAlbum.findMany()
      if(!singerAlbum) throw new Error("NoSuchSingerAlbum")
      return singerAlbum
    }catch(err){
      throw new Error("NoSuchSingerAlbum")
    }
  }

async  findOne(id: number) {
    try{
      const singerAlbum=await this.prisma.singerAlbum.findUnique({where:{id: id},include:{
        singers:true,
        song:true
      }})
      if(!singerAlbum) throw new Error("NoSuchSingerAlbum")
      return singerAlbum
    }catch(err){
      return("NoSuchSingerAlbum")
    }
  }

 async update(id: number, updateSingerAlbumDto: UpdateSingerAlbumDto) {
  try{
    const singerAlbum=await this.prisma.singerAlbum.update({where:{id: id},data:updateSingerAlbumDto})
    if(!singerAlbum) throw new Error("   nnn")
    return singerAlbum
  }catch(err){
    return ("not supported")
  }
  }

async  remove(id: number) {
    try{
      const singerAlbum=await this.prisma.singerAlbum.delete({where:{id: id}})
      if(!singerAlbum) throw new Error("NoSuchSingerAlbum")
      return singerAlbum
    }catch(err){
      throw new Error("NoSuchSingerAlbum")
    }
  }
}
