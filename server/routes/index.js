import express from 'express';
import  userRouter from './userRoute';

const router = express.Router();

router.use('/registro', userRouter);

export default router;