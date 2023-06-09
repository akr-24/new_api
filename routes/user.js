import express from 'express';
import { getAllUsers, specialFunc ,getUserDetails ,register } from '../controllers/user.js';

const router=express.Router();

router.get("/all",getAllUsers);
router.post("/new",register);
router.post("/login",login);
//router.get("/userid/:id",getUserDetails);

router.route("/userid/:id",getUserDetails);

//router.get("/userid/special",specialFunc)

export default router;