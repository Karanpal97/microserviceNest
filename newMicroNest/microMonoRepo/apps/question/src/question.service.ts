import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Question } from '../entity/entity';
import { questionDto } from '../dto/question-dto';

@Injectable()
export class QuestionService {
  constructor(private questionRepo: Repository<Question>) {}

  async createQuestion(questionDto: questionDto) {
    const question = await this.questionRepo.create(questionDto);
    const exist = await this.questionRepo.findOneBy(questionDto);
    if (exist) {
      throw new ConflictException('question title already exsis');
    } else {
      try {
        this.questionRepo.save(question);
      } catch (error) {
        throw new InternalServerErrorException();
      }
    }
  }
  async getAllQuestion() {
    return this.questionRepo.find();
  }
}
