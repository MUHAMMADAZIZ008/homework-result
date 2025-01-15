import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRedis() private readonly redis: Redis,
  ) {}
  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productRepository.save(createProductDto);
    await this.redis.set(String(newProduct.id), JSON.stringify(newProduct));
    return newProduct;
  }

  async findAll() {
    const redisKeys = await this.redis.keys('*');
    if (redisKeys.length > 0) {
      const products = await this.redis.mget(redisKeys);
      return products.map((product) => JSON.parse(product));
    } else {
      const products = await this.productRepository.find();
      products.forEach(async (product) => {
        await this.redis.set(String(product.id), JSON.stringify(product));
      });
      return products;
    }
  }

  async findOne(id: number) {
    const product = await this.redis.get(String(id));
    if (!product) {
      const productInPostgres = await this.productRepository.findOne({
        where: { id },
      });
      if (!productInPostgres) {
        throw new NotFoundException('product not found');
      }
      await this.redis.set(
        String(productInPostgres.id),
        JSON.stringify(productInPostgres),
      );
      return productInPostgres;
    }
    return product;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productInPostgres = await this.productRepository.findOne({
      where: { id },
    });
    if (!productInPostgres) {
      throw new NotFoundException('product not found');
    }
    await this.redis.set(
      String(productInPostgres.id),
      JSON.stringify({ ...productInPostgres, ...updateProductDto }),
    );
    return this.productRepository.update({ id }, updateProductDto);
  }

  async remove(id: number) {
    const product = await this.redis.get(String(id));
    if (product) await this.redis.del(String(id));
    return this.productRepository.delete({ id });
  }
}
