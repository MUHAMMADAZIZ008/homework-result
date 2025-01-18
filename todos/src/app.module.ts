import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [UsersModule, TodosModule],
  providers: [PrismaService],
})
export class AppModule {}
