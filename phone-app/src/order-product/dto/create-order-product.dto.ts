import { IsPositive } from 'class-validator';

export class CreateOrderProductDto {
  @IsPositive()
  order_id: number;

  @IsPositive()
  product_id: number;
}
