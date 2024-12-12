import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { UsersRepository } from './repasitory';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRepasitory') private readonly userRepasitory: UsersRepository,
  ) {}

  async create(CreateUser: CreateUserDto): Promise<User | string> {
    return this.userRepasitory.create(CreateUser);
  }

  async findAll(): Promise<User[]> {
    return this.userRepasitory.findAll();
  }

  async findOne(id: string): Promise<User | string> {
    return this.userRepasitory.findOne(id);
  }

  async update(
    id: string,
    updateUser: UpdateUserDto,
  ): Promise<UpdateUserDto | string> {
    return this.userRepasitory.update(id, updateUser);
  }

  async remove(id: string): Promise<UpdateUserDto | string> {
    return this.userRepasitory.remove(id);
  }
}
