import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  register(registerAuthDto: RegisterAuthDto) {
    this.userService.create(registerAuthDto);
    return 'Go through login';
  }
}
