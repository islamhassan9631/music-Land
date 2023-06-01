import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfileService {
  constructor(private prisma:PrismaService){}
 async create(createProfileDto: CreateProfileDto) {
   try{
    const profile = await this.prisma.profile.create({data:{...createProfileDto,
       userId:+createProfileDto.userId,
      age:+createProfileDto.age
    }}

      )
      return profile
   }catch(e){
    return e.message
   }
  }

 async findAll() {
    try{
      const profile = await this.prisma.profile.findMany()
        return profile
     }catch(e){
      return e.message
     }
  }

 async findOne(id: number) {
    try{
      const profile = await this.prisma.profile.findUnique({where:{id:id},include:{
        favoritelist:true,
        user:true
      }})
      if(!profile) throw new Error("Profile not found")
        return profile
     }catch(e){
      return e.message
     }
  }

async  update(id: number, updateProfileDto: UpdateProfileDto) {
  try{
    const profile = await this.prisma.profile.update({where:{id:id},data:{...updateProfileDto,
      userId:+updateProfileDto.userId,
      age:+updateProfileDto.age
    }})
    if(!profile) throw new Error("Profile not found")
      return profile
   }catch(e){
    return e.message
   }
  }

 async remove(id: number) {
  try{
    const profile = await this.prisma.profile.delete({where:{id:id}})
    if(!profile) throw new Error("Profile not found")
      return ("Profile deleted")
   }catch(e){
    return e.message
   }
  }
}
