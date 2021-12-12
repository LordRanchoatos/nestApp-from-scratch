import { Module } from '@nestjs/common';
import { StudentController } from '../student/student.controller';
import { TeachersController } from '../teacher/teacher.controller';
import { StudentTeachersController } from 'src/teacher/student.controller';
import { StudentService } from 'src/student/student.service';
import { TeacherService } from 'src/teacher/teacher.service';

@Module({
  imports: [],
  controllers: [
    StudentController,
    TeachersController,
    StudentTeachersController,
  ],
  providers: [StudentService, TeacherService],
})
export class AppModule {}
