import express from 'express';

import Admin from '../controller/adminController.js';
import Login from '../controller/loginController.js';
import Message from '../controller/messageController.js';
import Robot from '../controller/robotController.js'
const router = express.Router();

router.get('/admin',Admin.index)
router.get('/qiniu/token',Admin.getQiniuToken);
router.post('/login',Login.login);
router.post('/register',Login.register);
router.get('/logout',Login.logout);
router.get('/test',Login.test);
router.post('/chat/save',Message.savemessage);
router.post('/robot/getinfo',Robot.getrobotinfo);

export default router;