import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: string;
  @Prop()
  title: string;
  @Prop()
  photo: string;
  @Prop()
  likes: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
