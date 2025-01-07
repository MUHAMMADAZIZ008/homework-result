import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { CustomMailerService } from 'src/email/mailer.service';
import { UserStatusEnum } from 'src/common/util/enum';
import { LoginAtuhDto } from './dto/login-auth.dto';
import { UserPayload } from './dto/payload.dto';
import { TokenGenerate } from 'src/common/token/token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly sendService: CustomMailerService,
    private readonly tokenGenerate: TokenGenerate,
  ) {}
  async register(registerAuthDto: RegisterAuthDto) {
    const newUser = await this.userService.create(registerAuthDto);
    const link = `http://localhost:3000/auth/user-active/${newUser._id}`;
    await this.sendService.sendUserActiveLink(newUser.email, link);
    return 'active link send your eamil';
  }

  async userActive(id: string) {
    await this.userService.findOne(id);
    await this.userService.update(id, { status: UserStatusEnum.ACTIVE });
    return 'you has been active';
  }

  async login(loginAuthDto: LoginAtuhDto) {
    const currnetUserByEmail = await this.userService.findByEmail(
      loginAuthDto.email,
    );
    if (!currnetUserByEmail) {
      throw new BadRequestException('email or password is wrong');
    }
    if (currnetUserByEmail.password !== loginAuthDto.password) {
      throw new BadRequestException('email or password is wrong');
    }
    if (currnetUserByEmail.status === UserStatusEnum.INACTIVE) {
      throw new BadRequestException('you are not active');
    }
    const payload: UserPayload = {
      sub: String(currnetUserByEmail._id),
      email: currnetUserByEmail.email,
    };
    const tokens = await this.tokenGenerate.createAccessAndRefresh(payload);
    return tokens;
  }
}
