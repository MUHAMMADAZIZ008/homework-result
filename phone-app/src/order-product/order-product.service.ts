import { Injectable } from '@nestjs/common';
import { CreateOrderProductDto } from './dto/create-order-product.dto';
import { UpdateOrderProductDto } from './dto/update-order-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderProductService {
  constructor(
    @InjectRepository(OrderProduct)
    private readonly orderProduct: Repository<OrderProduct>,
  ) {}
  async create(createOrderProductDto: CreateOrderProductDto) {
    const newOrderPro = await this.orderProduct.save(createOrderProductDto);
    return newOrderPro;
  }

  async findAll() {
    const allOrderPro = await this.orderProduct.find();
    return allOrderPro;
  }

  async findOne(id: number) {
    const orderProduct = await this.orderProduct.findOne({ where: { id } });
    return orderProduct;
  }

  async update(id: number, updateOrderProductDto: UpdateOrderProductDto) {
    const updatedOrderPro = await this.orderProduct.update(
      id,
      updateOrderProductDto,
    );
    return updatedOrderPro;
  }

  remove(id: number) {
    return this.orderProduct.delete(id);
  }
}
