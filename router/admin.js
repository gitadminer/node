import express from 'express';

import Admin from '../controller/adminController.js';
import Login from '../controller/loginController.js';

const router = express.Router();

router.get('/admin',Admin.index)
router.get('/login',Login.login);
router.get('/register',Login.register);
router.get('/logout',Login.logout);

export default router;