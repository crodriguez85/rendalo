import userController from '../controllers/UserController';
import express from 'express';
const router = express.Router()

router.post('/add', userController.add);
router.get('/list', userController.list);

export default router;