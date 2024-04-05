import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Song2 } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Song2) private ProductRepo: Repository<Song2>,
  ) {}
  async create(createProductDto: CreateProductDto) {
    return await this.ProductRepo.save(createProductDto);
  }

  findAll() {
    return this.ProductRepo.find();
  }

  findOne(id: number) {
    return this.ProductRepo.findOne({ where: { id } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
