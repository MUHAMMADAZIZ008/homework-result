import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { CustomMailerService } from 'src/email/mailer.service';
import { TokenGenerate } from 'src/common/token/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({}), UsersModule],
  controllers: [AuthController],
  providers: [TokenGenerate, CustomMailerService, AuthService],
})
export class AuthModule {}
