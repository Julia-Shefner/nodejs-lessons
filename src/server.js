// import express from 'express';

// const app = express();
// const PORT = 3000;

// app.use((req, res, next) => {
//   console.log(`Time: ${new Date().toLocaleString()}`);
//   next();
// });

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Hello world!' });
// });

// app.get('/health', (req, res) => {
//   res.status(200).json({
//     status: 'Ok!',
//   });
// });

// app.get('/test-error', (req, res) => {
//   throw new Error('Something went wrong');
// });

// app.use((req, res) => {
//   res.status(404).json({ message: 'Route not found' });
// });

// app.use((err, req, res, next) => {
//   console.error('Error:', err.message);
//   res.status(500).json({
//     message: 'Internal Server Error',
//     error: err.message,
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { connectMongoDb } from './db/connectMongoDB.js';
import { logger } from './middleware/logger.js';
import { notFoundHandler } from './middleware/notFounfHandler.js';
import { errorHandler } from './middleware/errorHandler.js';
import studentsRoutes from './routes/studentsRoutes.js';
import { errors } from 'celebrate';

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(logger);
app.use(express.json());
app.use(cors());

app.use(studentsRoutes);

app.get('/test-error', (req, res) => {
  throw new Error('Something went wrong');
});

app.use(notFoundHandler);

app.use(errors());

app.use(errorHandler);

await connectMongoDb();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
