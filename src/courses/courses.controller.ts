import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  getAll(): any {
    return this.coursesService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.coursesService.finfOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.coursesService.cerate(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coursesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coursesService.remove(id);
  }
}
