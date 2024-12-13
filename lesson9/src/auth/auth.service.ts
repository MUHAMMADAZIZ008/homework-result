import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersRopsitory } from 'src/users/repasitory/user.repasitory';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UserRpasitory') private readonly userRepasitory: UsersRopsitory,
  ) {}
  async registerService(user: User): Promise<string> {
    const newUser = await this.userRepasitory.register(user);
    return newUser;
  }

  async loginService(user: UpdateUserDto): Promise<object> {
    const token = await this.userRepasitory.login(user);
    return token;
  }
}
