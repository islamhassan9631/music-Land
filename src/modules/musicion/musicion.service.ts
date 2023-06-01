
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable, UnprocessableEntityException, Delete } from '@nestjs/common';
import { CreateMusicionDto } from './dto/create-musicion.dto';
import { UpdateMusicionDto } from './dto/update-musicion.dto';
import { UnsubscriptionError } from 'rxjs';

@Injectable()
export class MusicionService {
  constructor (private PrismaService:PrismaService){}
  create(createMusicionDto: CreateMusicionDto) {
const musicion=this.PrismaService.Musicion.create({data:createMusicionDto})
return musicion
  }

  findAll() {
    const musicion=this.PrismaService.Musicion.findMany()
  if(!musicion) throw new UnprocessableEntityException
  return musicion
  }

  findOne(id: number) {
 const musicion= this.PrismaService.Musicion.findUnique({where:{id},include:{
  musicionAlbum:true,
  music:true
 }})
 if(!musicion) {return   new Error("Musicion not found")}
 return musicion
  }

  update(id: number, updateMusicionDto: UpdateMusicionDto) {
    const musicion= this.PrismaService.Musicion.update({data: updateMusicionDto,where:{id}})
    if(!musicion) throw new UnprocessableEntityException
 return musicion
  }

  remove(id: number) {
   return this.PrismaService.Musicion.delete({where:{id}})
  }
}
