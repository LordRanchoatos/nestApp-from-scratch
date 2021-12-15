import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { CreateStudentDto, UpdateStudentDto, Student } from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(): Student[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string): Student {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto): Student {
    return this.studentService.createStudent(createStudentDto);
  }

  @Put(':studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): Student[] {
    return this.studentService.updateStudent(studentId, body);
  }
}
