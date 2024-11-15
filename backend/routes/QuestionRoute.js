import express from 'express';
import { checkuser, createuser } from '../Controllers/auth.js';
import { createquestion, getquestion, getquestionbyid } from '../Controllers/Experience.js';


const router = express.Router();



router.post('/signup',createuser );
router.post('/login',checkuser);
router.post('/interview-experience',createquestion );
router.get('/experiences',getquestion );
router.get('/experiences/:id', getquestionbyid);


export default router;