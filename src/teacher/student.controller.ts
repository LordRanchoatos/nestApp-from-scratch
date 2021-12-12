import { Controller, Get, Param, Put } from '@nestjs/common';
import { Teacher } from './dto/teacher.dto';
import { Student } from 'src/student/dto/student.dto';
import { StudentService } from 'src/student/student.service';

@Controller('teacher/:teacherId/students')
export class StudentTeachersController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(@Param('teacherId') teacherId: string): Student[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateTeachersStudents(
    @Param('teacherId') teacherId: string,
    @Param('studentId') studentId: string,
  ): Student {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
