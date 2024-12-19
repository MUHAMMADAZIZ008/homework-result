import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userModel: typeof User,
  ) {}
  async create(createUserDto): Promise<User> {
    const currentEmail = await this.userModel.findOne({
      where: { email: createUserDto.email },
    });
    if (!currentEmail) {
      throw new BadRequestException('email already exsist');
    }
    const newUser = await this.userModel.create(createUserDto);
    return newUser;
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userModel.findOne({
      where: { id },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    const currentUser = await this.findOne(id);
    if (!currentUser) {
      throw new NotFoundException('User not found');
    }
    const updatedUser = await this.userModel.update(updateUserDto, {
      where: { id },
      returning: true,
    });
    return updatedUser[1];
  }

  async remove(id: number): Promise<number> {
    const currentUser = await this.findOne(id);
    if (!currentUser) {
      throw new NotFoundException('User not found');
    }
    return await this.userModel.destroy({
      where: { id },
    });
  }
}
