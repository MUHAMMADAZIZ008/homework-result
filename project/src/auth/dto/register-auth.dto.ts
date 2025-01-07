import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsStrongPassword } from 'class-validator';
import { UserStatusEnum } from 'src/common/util/enum';

export class RegisterAuthDto {
  @ApiProperty({
    description: `enter user's fullname`,
    example: `Muhammadaziz G'ulomov`,
    maxLength: 50,
  })
  @IsOptional()
  fullname: string;
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

  status: UserStatusEnum;
}
