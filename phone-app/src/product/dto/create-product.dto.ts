import {
  IsBoolean,
  IsNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  name: string;

  @IsNumber({ allowInfinity: false })
  @Min(1)
  price: number;

  @IsString()
  @MinLength(10)
  info: string;

  @IsBoolean()
  is_active: boolean;

  @IsNumber({ allowInfinity: false })
  @Min(1)
  quantity: number;
}
