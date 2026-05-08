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
} from '../validations/studentsValidation.js';
import { celebrate } from 'celebrate';

const router = Router();

router.get('/students', getStudents);

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
