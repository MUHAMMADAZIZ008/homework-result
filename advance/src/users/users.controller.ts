import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/Guards/auth.guard';
import { Public } from 'src/Guards/public';
import { Roles } from 'src/Guards/roles.decorator';
import { userRoleEnum } from 'src/utils/enum';
import { RolesGuard } from 'src/Guards/role.guard';

@UseGuards(AuthGuard)
@UseGuards(RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles([userRoleEnum.ADMIN, userRoleEnum.SUPERADMIN])
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Public()
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @Roles([userRoleEnum.ADMIN, userRoleEnum.SUPERADMIN])
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @Roles([userRoleEnum.ADMIN, userRoleEnum.SUPERADMIN, userRoleEnum.USER])
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
