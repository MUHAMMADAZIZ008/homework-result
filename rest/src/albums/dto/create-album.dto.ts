import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAlbumDto {
  @IsString()
  @IsNotEmpty()
  photoPath: string;

  @IsString()
  @IsNotEmpty()
  photoYear: Date;
}
