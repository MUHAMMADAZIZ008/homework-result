import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService, IBudget } from './app.service';

@Controller('budget')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() budget: IBudget) {
    return this.appService.create(budget);
  }
  @Get()
  getAll() {
    return this.appService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.appService.getOne(+id);
  }

  @Put(':id/:command')
  update(
    @Param('id') id: number,
    @Body() updateBudget: Partial<IBudget>,
    @Param('command') command: string,
  ) {
    return this.appService.update(+id, updateBudget, command);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.appService.delete(+id);
  }
}
