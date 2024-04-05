import { Controller, Get } from '@nestjs/common';
import { QuestionService } from './question.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { questionDto } from '../dto/question-dto';

@Controller()
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @EventPattern('question_created')
  createQuetion(questionDto: questionDto) {
    return this.questionService.createQuestion(questionDto);
  }

  @MessagePattern({ cmd: 'get-all-question' })
  getAllQuestion() {
    return this.questionService.getAllQuestion();
  }
}
