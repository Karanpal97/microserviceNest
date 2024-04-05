import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('song2')
export class Song2 {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  photo: string;
  @Column({ default: 0 })
  likes: number;
}
