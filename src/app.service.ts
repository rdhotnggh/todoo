import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma1/prisma.service';

@Injectable()
export class AppService{
  constructor (private dbService: PrismaService){}

  /**
   *
   * @returns 
   */
  async findAll (){
    return await this.dbService.todo.findMany();
  }


  /**
   * 
   * @param data 
   * @returns 
   */
  async creatData(data: { text: string }) {
    return this.dbService.todo.create({
      data: data,
    });
  }

  async updateData(id: number, data: { text?: string }) {
  return this.dbService.todo.update({
    where: { id },
    data,
  });
}

  async deleteData(id: number){
    return await this.dbService.todo.delete({
      where: { id },
    });
  }

}
  
