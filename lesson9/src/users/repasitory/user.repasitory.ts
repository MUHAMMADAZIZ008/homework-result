import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { AlreadyExsist, NotFound } from 'src/exception/exception';
import { createHashPassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersRopsitory {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async create(createUserDto: CreateUserDto): Promise<User> {
    const currentEmail = await this.userModel.find({
      email: createUserDto.email,
    });
    if (currentEmail.length) {
      throw new AlreadyExsist('email already exsist');
    }
    const hashedPassword = await createHashPassword(createUserDto.password);
    createUserDto.password = hashedPassword;
    const newUser = await this.userModel.create(createUserDto);
    await newUser.save();
    return newUser;
  }

  async findAll(): Promise<User[]> {
    const allUser = await this.userModel.find();
    return allUser;
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    if (!user) {
      throw new NotFound('User not found!');
    }
    return user;
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateUserDto> {
    const updateUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );

    if (!updateUser) {
      throw new NotFound('User not found!');
    }
    return updateUser;
  }

  async remove(id: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(id, {
      new: true,
    });
    if (!deletedUser) {
      throw new NotFound('User not found!');
    }
    return deletedUser;
  }
}
