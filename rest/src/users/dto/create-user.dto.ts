import {
  IsNotEmpty,
  IsString,
  IsStrongPassword,
  Max,
  Min,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(30)
  username: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
  version: number;
  createdAt: Date;
  updatedAt: Date;
}
