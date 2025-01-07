import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserPayload } from 'src/auth/dto/payload.dto';

@Injectable()
export class TokenGenerate {
  constructor(private jwtService: JwtService) {}
  async createAccessAndRefresh(payload: UserPayload) {
    const accessToken = this.jwtService.sign(payload, {
      secret: 'qwert',
      expiresIn: '1d',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: 'qwert1',
      expiresIn: '7d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }
}
