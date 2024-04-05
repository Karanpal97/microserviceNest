import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song2 } from './entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song2])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
