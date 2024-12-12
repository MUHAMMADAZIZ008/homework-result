import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository {
  constructor(@InjectModel(User.name) private usersModel: Model<User>) {}

  async create(CreateUser: CreateUserDto): Promise<User | string> {
    const currentUsename = await this.usersModel.find({
      username: CreateUser.username,
    });
    if (currentUsename.length) {
      return 'username alredy exsist!';
    }
    const newUser = await this.usersModel.create(CreateUser);
    await newUser.save();
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const allUser = await this.usersModel.find();
    return allUser;
  }

  async findOne(id: string): Promise<User | string> {
    const findUser = await this.usersModel.findById(id);
    if (!Object.keys(findUser).length) {
      return 'user not found';
    }
    return findUser;
  }

  async update(
    id: string,
    updateUser: UpdateUserDto,
  ): Promise<UpdateUserDto | string> {
    const findUser = await this.usersModel.findById(id);
    if (!Object.keys(findUser).length) {
      return 'user not found';
    }
    const updatedUser = await this.usersModel.findByIdAndUpdate(
      id,
      updateUser,
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string): Promise<UpdateUserDto | string> {
    const findUser = await this.usersModel.findById(id);
    if (!Object.keys(findUser).length) {
      return 'user not found';
    }
    const deletedUser = await this.usersModel.findByIdAndDelete(id);
    return deletedUser;
  }
}
