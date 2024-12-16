import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRopsitory } from './repasitory/user.repasitory';
import { JwtModule } from '@nestjs/jwt';
import { MailService } from 'src/utils/sendMail';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: 'qwert',
      signOptions: { expiresIn: '7d' },
    }),
  ],
  controllers: [UsersController],
  providers: [
    MailService,
    {
      provide: 'UserRpasitory',
      useClass: UsersRopsitory,
    },
    UsersService,
  ],
  exports: ['UserRpasitory'],
})
export class UsersModule {}
