import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRedis() private readonly redis: Redis,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const userEmail = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });
    if (userEmail) {
      throw new BadRequestException('email already existu!');
    }

    const userPhone = await this.userRepository.findOne({
      where: { phone: createUserDto.phone },
    });
    if (userPhone) {
      throw new BadRequestException('phone already existu!');
    }

    const newUser = await this.userRepository.save(createUserDto);
    await this.redis.set(String(newUser.id), JSON.stringify(newUser));
    return newUser;
  }

  async findAll() {
    const redisKeys = await this.redis.keys('*');
    if (redisKeys.length > 0) {
      const users = await this.redis.mget(redisKeys);
      return users.map((user) => JSON.parse(user));
    } else {
      const allUser = await this.userRepository.find();
      allUser.forEach(async (user) => {
        await this.redis.set(String(user.id), JSON.stringify(user));
      });
      return allUser;
    }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException('user not found!');
    }
    const updatedUser = await this.userRepository.update({ id }, updateUserDto);
    return updatedUser;
  }

  async remove(id: number) {
    await this.userRepository.delete({ id });
    return 'user deleted';
  }
}
