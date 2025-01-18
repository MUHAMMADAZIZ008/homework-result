import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Users, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
  async create(createUserDto: Prisma.UsersCreateInput): Promise<Users> {
    const newUser = await this.prismaService.users.create({
      data: createUserDto,
    });
    return newUser;
  }

  async findAll(): Promise<Users[]> {
    const allUser = await this.prismaService.users.findMany({
      include: {
        todos: {
          select: {
            id: true,
            task: true,
            userId: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
    return allUser;
  }

  async findOne(id: number): Promise<Users> {
    const user = await this.prismaService.users.findUnique({ where: { id } });
    return user;
  }

  async update(
    id: number,
    updateUserDto: Prisma.UsersUpdateInput,
  ): Promise<Users> {
    return this.prismaService.users.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number): Promise<Users> {
    return this.prismaService.users.delete({ where: { id } });
  }
}
