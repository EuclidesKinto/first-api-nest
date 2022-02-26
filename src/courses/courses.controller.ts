import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { CoursesService } from './courses.service';

@Controller('products')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}
  @Get()
  getAll(@Res() response): string {
    return response.status(200).send('products list');
  }

  @Get(':slug')
  getOne(@Param('slug') slug: string) {
    return `product with ${slug}`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() body: any) {
    return body;
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() body) {
    return `Update product with slug: ${slug}`;
  }

  @Delete(':slug')
  remove(@Param('slug') slug: string) {
    return `Remove product with slug: ${slug}`;
  }
}
