import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('answer')
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column() // Add this line to define the questionId property
  questionId: number; // Assuming it's of type number, adjust if needed
}
