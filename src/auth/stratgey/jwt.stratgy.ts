import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from "@nestjs/common";
import { Strategy ,ExtractJwt} from 'passport-jwt';
import { Jwt } from '../constants';
import { UserService } from 'src/modules/user/user.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
constructor(private user:UserService){
    super({
        jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
       ignoreExpiration:false,
        secretOrKey:Jwt.secretKet
    });
}

  async  validate(paylod:{sub:string,email:string}){
        const user=await this.user.findOneByEmail(paylod.email)
        return {id:paylod.sub, email:paylod.email,user}
    }
}