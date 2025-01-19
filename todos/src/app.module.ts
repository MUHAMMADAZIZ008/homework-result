import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { TodosModule } from './todos/todos.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    UsersModule,
    TodosModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
