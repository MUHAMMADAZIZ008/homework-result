import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @IsString()
  userId: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  slug: string;
}
