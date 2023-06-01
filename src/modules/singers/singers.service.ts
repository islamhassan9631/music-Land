import { Injectable } from '@nestjs/common';
import { CreateSingerDto } from './dto/create-singer.dto';
import { UpdateSingerDto } from './dto/update-singer.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { error } from 'console';

@Injectable()
export class SingersService {
  constructor(private prisma:PrismaService){}
 async create(createSingerDto: CreateSingerDto) {
  try{
const singer=await this.prisma.singers.create({data: createSingerDto})
return singer

}catch{}
  }

 async findAll() {
   try{
    const singers=await this.prisma.singers.findMany()
    if(!singers) throw new Error ("singers not found")
    return {data:singers,200:200}
   }catch{
    return error("singers not found")
   }
  }

 async findOne(id: number) {
    try{
      const singer=await this.prisma.singers.findUnique({where:{id:id},include:{
        singerAlbum:true,
        song:true
      }})
      if(!singer) throw new Error ("singer not found")
      return {data:singer,200:200}
     }catch{
      return ("singer not found")
     }
  }

 async update(id: number, updateSingerDto: UpdateSingerDto) {
    try{
      const singer=await this.prisma.singers.update({data: updateSingerDto,where:{id}})
      if(!singer) throw new Error ("singer not found")
      return {data:singer,200:200}
     }catch{
      return error("singer not found")
     }
  }

 async remove(id: number) {
    try{
      const singer=await this.prisma.singers.delete({where:{id:id}})
      if(!singer) throw new Error ("singer not found")
      return ("success")
     }catch{
      return error("singer not found")
     }
  }
}
