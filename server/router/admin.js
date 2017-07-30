import express from 'express';

import Admin from '../controller/adminController.js';
import Login from '../controller/loginController.js';
import Message from '../controller/messageController.js';

const router = express.Router();

router.get('/admin',Admin.index)
router.post('/login',Login.login);
router.post('/register',Login.register);
router.get('/logout',Login.logout);
router.post('/chat/save',Message.savemessage);


export default router;