import { Injectable } from '@nestjs/common';
import { students } from 'src/db';
import { v4 as uuid } from 'uuid';
import { CreateStudentDto, Student } from './dto/student.dto';

@Injectable()
export class StudentService {
  private students = students;

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(studentId: string): Student {
    return this.students.find((student) => {
      return student.id === studentId;
    });
  }

  createStudent(createStudentDto: CreateStudentDto): Student {
    let newStudent = {
      id: uuid(),
      ...createStudentDto,
    };

    this.students.push(newStudent);

    return newStudent;
  }

  updateStudent(
    studentId: string,
    createStudentDto: CreateStudentDto,
  ): Student[] {
    //let updatedStudent: Student;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        return {
          id: studentId,
          ...createStudentDto,
        };
      } else return student;
    });

    this.students = updatedStudentList;

    // return updatedStudent;
    return this.students;
  }

  getStudentsByTeacherId(teacherId: string): Student[] {
    return this.students.filter((student) => {
      return student.teacher === teacherId;
    });
  }

  updateStudentTeacher(teacherId: string, studentId: string): Student {
    let updatedStudent: Student;

    const updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          ...student,
          teacher: teacherId,
        };
      } else return student;
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }
}
