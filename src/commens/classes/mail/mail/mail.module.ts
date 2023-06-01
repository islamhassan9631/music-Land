import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

@Module({
    imports: [
        MailerModule.forRoot({
          // transport: 'smtps://user@example.com:topsecret@smtp.example.com',
          // or
          transport: {
            host: "smtp.sendgrid.net",
         
            // secure: false,
            auth:{
                user:"apikey",
                pass:"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"
            },
          },
          defaults: {
            from: 'islamhassan9631@gmail.com',
          },
         
        }),
      ],
      providers: [MailService],
      exports: [MailService]
})
export class MailModule {}
