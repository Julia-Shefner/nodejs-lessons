import { Router } from 'express';
import {
  getStudentById,
  getStudents,
  createStudent,
  deleteStudent,
  updateStudent,
} from '../controllers/studentsControllers.js';
import {
  createStudentSchema,
  studentIdParamsSchema,
  updateStudentSchema,
  getStudentsSchema,
} from '../validations/studentsValidation.js';
import { celebrate } from 'celebrate';
import { authenticate } from '../middleware/authenticate.js';

const router = Router();

router.use('/students', authenticate);

router.get('/students', celebrate(getStudentsSchema), getStudents);

router.get(
  '/students/:studentId',
  celebrate(studentIdParamsSchema),
  getStudentById,
);

router.post('/students', celebrate(createStudentSchema), createStudent);

router.delete(
  '/students/:studentId',
  celebrate(studentIdParamsSchema),
  deleteStudent,
);

router.patch(
  '/students/:studentId',
  celebrate(updateStudentSchema),
  updateStudent,
);

export default router;
