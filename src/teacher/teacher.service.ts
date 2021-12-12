import { Injectable } from '@nestjs/common';
import { teachers } from 'src/db';
import { Teacher } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
  private teachers = teachers;

  getTeachers(): Teacher[] {
    return this.teachers;
  }

  getTeachersById(teacherId: string): Teacher {
    return this.teachers.find((teacher) => {
      return teacher.id === teacherId;
    });
  }
}
