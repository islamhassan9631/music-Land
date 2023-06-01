import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, profile, favoritelist, playlist } from '@prisma/client';

@Injectable()
export class UserService {
  constructor (private PrismaService:PrismaService){}
 async create(createUserDto: CreateUserDto) {
    try{
      const user= await this.PrismaService.User.create({data:createUserDto} )
    return user
    }catch(err){
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002')
          throw new ForbiddenException('thire is user with same email or phone number !');
      } 
      throw new HttpException(err.message, 400);
    }
    }
  
  async findcode(token:string){
    try{
      const user=await this.PrismaService.user.findFirst({where:{resetPasswordToken:token}})
      console.log(token);
      
      return user
    }catch(e){
      throw  e
    }
  }

 async findAll() {
  try{
    const users = await this.PrismaService.User.findMany()
    if(!users) throw new  Error("No users found")
   return users
  }catch{
    return ("user not found")
  }
   
  }

 async findOne(id: number) {
  try{
     const user= await this.PrismaService.User.findUnique({where:{id},include:{
      profile:{include:{ favoritelist:true}},
      playlist:{include:{traks:true}}
     
      
     }})
    if(!user) throw new Error('User not found')
    return user
  }catch(e){
    return e.message
  }
   
  }

 async update(id: number, updateUserDto: UpdateUserDto) {
  try{
    const user=await this.PrismaService.User.update({data: updateUserDto,where:{id}})
    if(!user) throw new Error('unsuccess')
    return user 
  }catch{
    throw new Error('unsuccess')
  }
    
  }
  findOneByEmail(email: string) {
    try{
       const user=  this.PrismaService.User.findUnique({where:{email},include:{
profile:true,

       }})
    if(!user) throw new Error('User not found')
    return user 
    }
    catch{
      throw new Error('User not found')
    }
   
  }
  remove(id: number) {
    const user =this.PrismaService.User.delete({where:{id}})
    if(!user) throw new Error('unsuccess')
    return (`delete success`)
  }
 
}
