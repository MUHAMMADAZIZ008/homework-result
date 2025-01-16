import { OrderStatus } from 'src/common/enum/order-status.enum';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total_price: number;
  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.NEW,
  })
  status: OrderStatus;
  @ManyToOne(() => User, (user) => user.orders, { eager: true })
  user: User[];
}
