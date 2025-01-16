import { IsNumber, IsPositive } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  @IsPositive()
  total_price: number;

  @IsNumber()
  @IsPositive()
  user_id: number;
}
