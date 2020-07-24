import express from 'express';
import DrawController from "../Controllers/Draw";
import User from "../Models/User";
import generateDraw from '../Services/generateDraw';
import sendMail from '../Services/sendMail';
import auth from '../Middlewares/auth';


const router = express.Router();
const drawController = new DrawController(User, generateDraw, sendMail);

router.post('/', auth, (req, res) => drawController.create(req, res));

export default router;
