import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import {
  ApiBody,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { LoginAtuhDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'user register here' })
  @ApiBody({
    description: 'fill to smiller example',
    type: RegisterAuthDto,
    required: true,
  })
  @ApiResponse({ status: 200, description: 'active link send your eamil' })
  @ApiResponse({ status: 404, description: 'user not found' })
  @Post('register')
  register(@Body() registerAuthDto: RegisterAuthDto) {
    return this.authService.register(registerAuthDto);
  }

  @ApiOperation({ summary: 'user active' })
  @ApiResponse({ status: 200, description: 'you has been active' })
  @ApiNotFoundResponse({ description: 'user not found' })
  @Get('user-active/:id')
  userActive(@Param('id') id: string) {
    return this.authService.userActive(id);
  }

  @Post('login')
  login(@Body() loginAuthDto: LoginAtuhDto) {
    return this.authService.login(loginAuthDto);
  }
}
