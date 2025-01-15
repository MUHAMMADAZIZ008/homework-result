import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  info: string;

  @Column({
    type: Boolean,
    default: true,
  })
  is_active: boolean;

  @Column()
  quantity: number;
}
