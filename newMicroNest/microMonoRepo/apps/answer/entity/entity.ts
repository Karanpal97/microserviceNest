import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Question } from '../../question/entity/entity'; // Import the Question entity

@Entity('answer') // Define the entity name
export class Answer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @ManyToOne(() => Question, (question) => question.answers) // Establish Many-to-One relationship with Question
  question: Question; // Define the relationship with Question entity
}
