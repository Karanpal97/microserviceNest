import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Answer } from '../entity/entity';

@Injectable()
export class AnswerService {
  constructor(private answerRepo: Repository<Answer>) {}

  async getAllAnswers(id: number) {
    const found = await this.answerRepo.find({
      where: { questionId: id } as any, // Type assertion
    });
    return found;
  }
}
