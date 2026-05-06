import { Router } from 'express';
import {
  getStudentById,
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../controllers/studentsControllers.js';

const router = Router();

router.get('/students', getStudents);

router.get('/students/:studentId', getStudentById);

router.post('/students', createStudent);

router.delete('/students/:studentId', deleteStudent);

router.patch('/students/:studentId', updateStudent);

export default router;
