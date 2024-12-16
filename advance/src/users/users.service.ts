import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRopsitory } from './repasitory/user.repasitory';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserRpasitory') private readonly userRepasitory: UsersRopsitory,
  ) {}
  create(createUserDto: CreateUserDto) {
    return this.userRepasitory.create(createUserDto);
  }

  findAll() {
    return this.userRepasitory.findAll();
  }

  findOne(id: string) {
    return this.userRepasitory.findOne(id);
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepasitory.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.userRepasitory.remove(id);
  }
}
