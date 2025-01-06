import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const currnetUserEmail = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (currnetUserEmail) {
      throw new BadRequestException('email alread exist');
    }
    const newUser = await this.userModel.create(createUserDto);
    await newUser.save();
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const allUser = await this.userModel.find();
    return allUser;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findOne({ _id: id });
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<string> {
    const currentUser = await this.userModel.findOne({ _id: id });
    if (!currentUser) {
      throw new NotFoundException('user not found');
    }
    await this.userModel.updateOne({ _id: id }, updateUserDto);
    return 'user has been updated';
  }

  async remove(id: string): Promise<string> {
    const currentUser = await this.userModel.findOne({ _id: id });
    if (!currentUser) {
      throw new NotFoundException('user not found');
    }
    await this.userModel.deleteOne({ _id: id });
    return 'user has been deleted';
  }
}
