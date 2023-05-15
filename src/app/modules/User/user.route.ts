import express from "express";
import { createUser, getUser, getUserById } from "./user.controler";
const router = express.Router();

router.get('/', getUser);
router.post("/create-user", createUser)
router.get("/:id", getUserById)

export default router;