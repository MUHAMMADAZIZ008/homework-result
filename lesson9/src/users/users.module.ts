import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User, UserSchema } from './entities/user.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersRopsitory } from './repasitory/user.repasitory';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [
    {
      provide: 'UserRpasitory',
      useClass: UsersRopsitory,
    },
    UsersService,
  ],
  exports: ['UserRpasitory'],
})
export class UsersModule {}
