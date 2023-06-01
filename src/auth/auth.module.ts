import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { Jwt } from './constants';
import { LocalStrategy } from './stratgey/stratgy';
import { JwtStrategy } from './stratgey/jwt.stratgy';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailModule } from 'src/commens/classes/mail/mail/mail.module';

@Module({
  imports:[PassportModule,UserModule,MailModule,
    JwtModule.register({
      secret:Jwt.secretKet,
      signOptions:{expiresIn:'3h'},
      global:true
    }),
  ],
  providers: [AuthService,LocalStrategy,JwtStrategy,PrismaService],
  controllers: [AuthController],
  exports:[PassportModule,JwtStrategy,JwtModule]
})
export class AuthModule {}
