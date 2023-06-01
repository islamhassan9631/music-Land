import { Injectable } from '@nestjs/common';
import { CreateMusicionAlbumDto } from './dto/create-musicion-album.dto';
import { UpdateMusicionAlbumDto } from './dto/update-musicion-album.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MusicionAlbumService {
  constructor(private prisma:PrismaService){}
 async create(createMusicionAlbumDto: CreateMusicionAlbumDto) {
    try{
      const musicionAlbum=await this.prisma.musicionAlbum.create({data:createMusicionAlbumDto})
      return musicionAlbum
    }catch{
return ("try again")
    }
  }

async  findAll() {
  try{
    const musicionAlbun=await this.prisma.musicionAlbum.findMany()
    if(!musicionAlbun) throw new Error("not found")
    return musicionAlbun
  }catch{
    return ("not found")
  }
  }

async  findOne(id: number) {
  try{
    const musicionAlbun=await this.prisma.musicionAlbum.findUnique({where:{id:id},include:{
      Musicion:true,
      music:true
    }})
    if(!musicionAlbun) throw new Error("not found")
    return musicionAlbun
  }catch{
    return ("not found")
  }
  }

 async update(id: number, updateMusicionAlbumDto: UpdateMusicionAlbumDto) {
  try{
    const musicionAlbun=await this.prisma.musicionAlbum.update({where:{id:id},data:updateMusicionAlbumDto})
    if(!musicionAlbun) throw new Error("not found")
    return musicionAlbun
  }catch{
    return ("not found")
  }
  }

 async remove(id: number) {
  try{
    const musicionAlbun=await this.prisma.musicionAlbum.delete({where:{id:id}})
    if(!musicionAlbun) throw new Error("not found")
    return musicionAlbun
  }catch{
    return ("not found")
  }
  }
}
