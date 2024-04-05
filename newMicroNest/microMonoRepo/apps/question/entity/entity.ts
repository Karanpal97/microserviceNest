import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Answer } from '../../answer/entity/entity'; 

@Entity('question') // Define the entity name
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => Answer, (answer) => answer.question) // Establish One-to-Many relationship with Answer
  answers: Answer[]; // Define the relationship with Answer entity
}
