import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Todos } from '@prisma/client';

@Injectable()
export class TodosService {
  constructor(private readonly prismaSerivce: PrismaService) {}
  async create(createTodoDto: Prisma.TodosCreateInput): Promise<Todos> {
    const newTodo = this.prismaSerivce.todos.create({ data: createTodoDto });
    return newTodo;
  }

  async findAll(): Promise<Todos[]> {
    const allTodos = await this.prismaSerivce.todos.findMany();
    return allTodos;
  }

  async findOne(id: number): Promise<Todos> {
    const todo = await this.prismaSerivce.todos.findUnique({ where: { id } });
    if (!todo) {
      throw new NotFoundException('todo not found');
    }
    return todo;
  }

  async update(id: number, updateTodoDto: Prisma.TodosUpdateInput) {
    await this.findOne(id);
    return this.prismaSerivce.todos.update({
      where: { id },
      data: updateTodoDto,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prismaSerivce.todos.delete({
      where: { id },
    });
  }
}
