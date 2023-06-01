import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user:any,message) {
  
    
    await this.mailerService.sendMail({
      to: user.email,
      from: "islamhassan9631@gmail.com", 
      subject: 'Your password reset code (valid for 10 min)',
    
     text:message,
  
    
    });


    
  }
}
