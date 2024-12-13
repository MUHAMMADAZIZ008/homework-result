import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../entities/user.entity';
import { AlreadyExsist, NotFound } from 'src/exception/exception';
import { copmareHashPassword, createHashPassword } from 'src/utils/bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersRopsitory {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
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

  async register(newUser: User): Promise<string> {
    type newType = User & { _id?: string };
    const addUser: newType = await this.create(newUser);
    return `you passed registration and this your id ${addUser._id}`;
  }

  async login(loginUser: UpdateUserDto): Promise<object> {
    const currentUser = await this.userModel.find({
      email: loginUser.email,
    });
    if (!currentUser.length) {
      throw new ForbiddenException('email or passowrd is not true');
    }
    const isMatch = await copmareHashPassword(
      loginUser.password,
      currentUser[0].password,
    );
    if (!isMatch) {
      throw new ForbiddenException('email or passowrd is not true');
    }
    const payload = {
      id: currentUser[0].id,
      email: currentUser[0].email,
    };
    const tokens = {
      access_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('ACCESS_SECRET'),
        expiresIn: this.configService.get<string>('ACCESS_TIME'),
      }),

      refresh_token: this.jwtService.sign(payload, {
        secret: this.configService.get<string>('REFRESH_SECRET'),
        expiresIn: this.configService.get<string>('REFRESH_TIME'),
      }),
    };
    return tokens;
  }
}
