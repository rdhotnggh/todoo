import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller('todo') 
export class AppController {
 constructor(private appService: AppService) { }


@Get()
async todo (){
    return await this.appService.findAll();
  }


@Post()
async createTodo(@Body() body: { blabla: string }) {
  return this.appService.creatData(body);
}

@Patch('/:id')
async updateTodo(@Param('id') id: string, @Body () Body: { blabla?: string }) {
  const todoId = Number(id);
  return await this.appService.updateData(todoId,Body);
}

@Delete('/:id')
  async deleteTodo (@Param('id') id: string) {
    const todoId = Number(id);
    return this.appService.deleteData(+todoId);
  }

}

