import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('register')
  async register(@Body() user: CreateUserDto) {
    return await this.authService.registerService(user);
  }

  @Post('login')
  async login(@Body() user: UpdateUserDto) {
    return await this.authService.loginService(user);
  }
}
