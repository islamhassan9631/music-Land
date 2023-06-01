import { logindto } from './../dtos/login.dto';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';




@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
constructor(private auth: AuthService){
    super({
        usernameField:"email"
    });
}
 async validate(logindto:logindto){
const user = await this.auth.valdiateUser(logindto);
if(!user) throw new UnauthorizedException();
return user
}
}