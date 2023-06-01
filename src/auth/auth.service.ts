import { logindto } from './dtos/login.dto';
import { BadRequestException, ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/modules/user/user.service';
import {CreateUserDto} from '../modules/user/dto/create-user.dto'
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailService } from 'src/commens/classes/mail/mail/mail.service';
import { forgetPassDto } from './dtos/forgetpass.dto';
import { ConformCodeDto } from './dtos/confirmcode.dto';
import { UpdateUserDto } from 'src/modules/user/dto/update-user.dto';
@Injectable()
export class AuthService {
    savetokenpass:any
    constructor(private userService: UserService,private jwt:JwtService, private prisma: PrismaService,private mailService:MailService) {
        
    }
    async valdiateUser(logindto:logindto){
        try{
               const user = await this.userService.findOneByEmail(logindto.email)
     if (!user) {throw new Error('Wrong email or password!');}
     const passCheck = await bcrypt.compare(logindto.password, user.password);
     if (!passCheck) {throw new Error('Wrong email or password!');}
        return this.sign(user)
        }catch(e){
            return e.message
        }
     
    }
    sign(user){
        const accessToken= this.jwt.sign({sub:user.id,email:user.email})
 return{ user: user,
     accessToken: accessToken,
    
 }
     }
  async  registerUser(CreateUserDto:CreateUserDto){
    try{
          const hashedPassword = await bcrypt.hash(CreateUserDto.password, 10)
const newUser = await this.userService.create({...CreateUserDto,password:hashedPassword})
return this.sign(newUser)
    }catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            if (err.code === 'P2002')
              throw new ForbiddenException('thire is user with same email or phone number !');
          } 
          throw new HttpException(err.message, 400);
        }
    }
  
    async forgetPass(data:forgetPassDto) {
        try {
          //find a user by email
          const checkUser = await this.prisma.user.findUnique({
            where: {
              email: data.email,
            },
          });
          // check if user exists
          if (!checkUser) throw new Error('Wrong email');
          const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
         const token =await this.encrypt(resetCode,"islam")
        const date=Date.now() + 10 * 60 * 1000
        const user= await this.prisma.user.update({
          where:{
            email:data.email,
          },
    data:{
             resetPasswordToken:token,
            resetExpiresTime:new Date(date)
        
        }})
        let message= `hey ${checkUser.name} متقلقش يا تقيل انا تربون جالك رقم اطرفنش كده ابعتهولي  ${resetCode}`
        // message= message.replace("<token>",`${resetCode}`) 
        // const testMsg=`this is reste code ${resetCode}`
         await this.mailService.sendUserConfirmation(checkUser,message )
         return (`check code in your email: ${checkUser.email}` )
        } catch (err) {
          throw new BadRequestException(err.message);
        }
      }
      async encrypt(text: string, secretKey: string) {
        const cipher = crypto.createCipher('aes-256-cbc', secretKey);
        let encrypted = cipher.update(text, 'utf-8', 'hex');
        encrypted += cipher.final('hex');
       
        return encrypted;
      }
      // async decrypt(encryptedText: string, secretKey: string) {
      //   const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
      //   let decrypted = decipher.update(encryptedText, 'hex', 'utf-8');
      //   decrypted += decipher.final('utf-8');
       
      //   return decrypted;
      // }
      async confrimCode(data:ConformCodeDto){ 
        try {
            console.log(data)
          const hashedToken= await this.encrypt(data.code,"islam")
         
          const user=await this.userService.findcode(hashedToken)
          
          console.log(user)
          if(!user) throw new Error (' wrong code')
           this.savetokenpass=hashedToken
        //   const date =Date.now()
        //   if( user.resetExpiresTime< new Date( date))throw new Error (' the code has expierd try agin')
          return("code vaild") 
        } catch (err) {
          throw new BadRequestException(err.message);
        }
        
      }
      async resetPassword(data){
        try {
          if(data.password!=data.passwordConfirm) throw new Error ('password not match')
          const hashedPassword = await bcrypt.hash(data.password, 10);
         
          const user =await this.prisma.user.findFirst({
            where:{
              resetPasswordToken:this.savetokenpass
            }
          })
           await this.prisma.user.update({
            where:{
              email:user.email
            },
            data:{
              password:hashedPassword,
              resetPasswordToken:'',
              resetExpiresTime:null,
            }
          })
          this.savetokenpass=null
         
          return ("password reset") 
        } catch (err) {
          throw new BadRequestException(err.message);
        }
      }
    }

