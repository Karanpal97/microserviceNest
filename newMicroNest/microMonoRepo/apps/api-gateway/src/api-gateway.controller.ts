import {
  Controller,
  Get,
  Inject,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { questionDto } from '../../question/dto/question-dto';
import { Answer } from '../../answer/dto/answer-entity';
import { ClientProxy } from '@nestjs/microservices';

@Controller('/questions')
export class ApiGatewayController {
  constructor(
    @Inject('QUESTIONS_SERVICE')
    private clientQuest: ClientProxy,
    @Inject('ANSWERS_SERVICE')
    private clientAnsw: ClientProxy,
  ) {}
  @Post()
  async createQuestion(@Body() createQuestionDto: questionDto) {
    return this.clientQuest.emit('question_created', createQuestionDto);
  }
  @Get()
  async getQuestions() {
    return this.clientQuest.send({ cmd: 'get-all-questions' }, '');
  }
  @Post('/:questionsId/answers')
  async createAnswer(
    @Body() createAnswer: Answer,
    @Param('questionsId', ParseIntPipe) questionsId: number,
  ) {
    createAnswer.questionId = questionsId;
    return this.clientAnsw.emit('answer_created', createAnswer);
  }

  @Get('/:questionsId/answers')
  async getAnswers(@Param('questionsId', ParseIntPipe) questionsId: number) {
    return this.clientAnsw.send({ cmd: 'get-all-answers' }, { questionsId });
  }
}
