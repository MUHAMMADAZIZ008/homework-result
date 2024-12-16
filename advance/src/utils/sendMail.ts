import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}
  async sendMail(to: string, subject: string, text: string) {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        text,
      });
      console.log('opt send');
    } catch (error) {
      console.error(error.message);
    }
  }
}
