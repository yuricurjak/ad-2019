import express from 'express';
import UsersController from '../Controllers/Users';
import User from '../Models/User';
import auth from '../Middlewares/auth';


const router = express.Router();
const usersController = new UsersController(User);

router.get('/', auth, (req, res) => usersController.get(req, res));
router.get('/:id', auth, (req, res) => usersController.getById(req, res));
router.post('/', auth, (req, res) => usersController.create(req, res));
router.put('/:id', auth,  (req, res) => usersController.update(req, res));
router.delete('/:id', auth, (req, res) => usersController.remove(req, res));

export default router;
