import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from './database';
// import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    // MulterModule.register({
    //   dest: '/upload',
    // }),
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot(Sequelize.connect()),
    UserModule,
  ],
})
export class AppModule {}
