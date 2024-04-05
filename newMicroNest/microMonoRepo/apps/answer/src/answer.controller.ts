import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AnswerService } from './answer.service';

@Controller()
export class AnswerController {
  constructor(private answerService: AnswerService) {}

  @MessagePattern({ cmd: 'get-all-answers' })
  getAllAnswers(data: any) {
    return this.answerService.getAllAnswers(data.id);
  }
}
