import express from 'express';

import Admin from '../controller/adminController.js';
import Login from '../controller/loginController.js';

const router = express.Router();

router.get('/admin',Admin.index)
router.post('/login',Login.login);
router.post('/register',Login.register);
router.get('/logout',Login.logout);
router.get('/test',Login.test);

export default router;