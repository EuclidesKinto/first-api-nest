import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos do NestJs',
      description: 'Framework Nest',
      tags: ['node', 'javascript', 'nestjs'],
    },
  ];
  findAll() {
    return this.courses;
  }
}
