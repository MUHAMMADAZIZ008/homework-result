import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'create new user' })
  @ApiBody({
    description: 'these are important for creating',
    type: CreateUserDto,
    required: true,
  })
  @ApiResponse({ status: 409, description: 'email already exist' })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'find all user' })
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @ApiOperation({ summary: 'find user by id' })
  @ApiParam({
    name: 'id',
    description: `Enter user's ID`,
    type: String,
    required: true,
  })
  @ApiResponse({ status: 404, description: 'user not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @ApiOperation({ summary: 'user update by id' })
  @ApiBody({
    description: `enter user information once`,
    type: UpdateUserDto,
    required: true,
  })
  @ApiParam({
    name: 'id',
    description: `Enter user's ID`,
    type: String,
    required: true,
  })
  @ApiResponse({ status: 404, description: 'user not found' })
  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @ApiOperation({ summary: 'delete user by id' })
  @ApiParam({
    name: 'id',
    description: `Enter user's ID`,
    type: String,
    required: true,
  })
  @ApiResponse({ status: 404, description: 'user not found' })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
