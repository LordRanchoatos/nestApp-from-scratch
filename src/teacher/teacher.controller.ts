import { Controller, Get, Param } from '@nestjs/common';
import { Teacher } from './dto/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): Teacher[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeachersById(@Param('teacherId') teacherId: string): Teacher {
    return this.teacherService.getTeachersById(teacherId);
  }
}
