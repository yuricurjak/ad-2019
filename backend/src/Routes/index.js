import express from 'express';
import usersRoute from './users';
import drawRoute from './draw';

const router = express.Router();

router.use('/users', usersRoute);
router.use('/draw', drawRoute);

export default router;
