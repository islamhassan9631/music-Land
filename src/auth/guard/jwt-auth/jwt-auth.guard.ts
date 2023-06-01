import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
@Injectable()
export class JwtGuard  extends AuthGuard('jwt') {
  
}

