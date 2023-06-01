import { Controller, Post, UseGuards,Request, Body, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth/local-auth.guard';
import { CreateUserDto } from 'src/modules/user/dto/create-user.dto';
import { JwtGuard } from './guard/jwt-auth/jwt-auth.guard';
import { Me } from './guard/me-auth/me-auth.guard';
import { logindto } from './dtos/login.dto';
import { forgetPassDto } from './dtos/forgetpass.dto';
import { ConformCodeDto } from './dtos/confirmcode.dto';
import { ResetPassDto } from './dtos/resetpass.dto';

@Controller('auth')
export class AuthController {
    constructor(private auth:AuthService){}
    @Post("login")
    @UseGuards(LocalAuthGuard)
        login(@Body() logindto:logindto){
            return this.auth.valdiateUser(logindto)
        }
    
        @Post("register")
        register(@Body() createUserDto:CreateUserDto){
            return this.auth.registerUser(createUserDto)
        }
    
    @Get("profile")
    @UseGuards(JwtGuard)
        profile(@Me() me){
            return me
        }
        @Post('forgetPassword')
        forgoet(@Body() data: forgetPassDto) {
          return this.auth.forgetPass(data);
        }
        @Post('confrimCode')
        verifay(@Body() data: ConformCodeDto) {
          return this.auth.confrimCode(data);
        }
        @Post('resetPassword')
        resetPass(@Body() data: ResetPassDto) {
          return this.auth.resetPassword(data);
        }
}
