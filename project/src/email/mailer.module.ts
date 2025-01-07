import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.MAIL_PORT, 10) || 587,
        secure: false,
        auth: {
          user: 'muhammadazizgulomov9@gmail.com',
          pass: 'leod rpsh bkci uvsl',
        },
      },
      defaults: {
        from: `"AUTH" <${'muhammadazizgulomov9@gmail.com'}>`,
      },
    }),
  ],
})
export class MailerModuleConfig {}
