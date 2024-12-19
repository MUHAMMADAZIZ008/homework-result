import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Sequelize } from './database';
// import { LoggerMiddleware } from './middlewares/users.middlewares';
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

//bu yerda middleware malum bir end point uchun chaqiriladi
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('user');//hamma user point lar uchun
//     consumer.apply(LoggerMiddleware).forRoutes({path:'user'}, method: RequestMethod.GET); user point dagi faqat get point lar uchun
//     consumer.apply(LoggerMiddleware).forRoutes(UserController);// faqat user controller uchun
//   }
// }
