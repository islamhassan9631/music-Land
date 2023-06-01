import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFavoreteDto } from './dto/create-favorete.dto';
import { UpdateFavoreteDto } from './dto/update-favorete.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { favoritelist, playlist, profile } from '@prisma/client';
import { Profile } from 'passport';

@Injectable()
export class FavoreteService {
  constructor(private prisma:PrismaService){}
 async create(createFavoreteDto: CreateFavoreteDto) {
   const favorete=this.prisma.favoritelist.create({data: createFavoreteDto})
   return favorete
  }

  findAll() {
    return `This action returns all favorete`;
  }

 async findOne(id: number,profile?:profile) {
   let favoretelist=null
   if(id){
    favoretelist=await this.prisma.favoritelist.findUnique({where:{id: id}})
   }
   else if(profile){
    favoretelist=await this.prisma.favoritelist.findUnique({where:{id: profile.id}})
   }
   else{
    throw new NotFoundException("favoretelist not found")
   }
   return favoretelist
  }

  update(id: number, updateFavoreteDto: UpdateFavoreteDto) {
    return `This action updates a #${id} favorete`;
  }

  remove(id: number) {
    return `This action removes a #${id} favorete`;
  }
}
