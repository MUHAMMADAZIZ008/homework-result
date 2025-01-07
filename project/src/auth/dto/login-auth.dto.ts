import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginAtuhDto {
  @ApiProperty({
    description: 'User email address',
    example: 'aziz@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'enter strong password',
    example: 'Qwer1234!',
  })
  @IsStrongPassword()
  password: string;
}
