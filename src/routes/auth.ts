import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth";

/**
 * https://localhost:3002/auth/register [POST]
 */

const router = Router();
router.post("/register", registerCtrl);
router.post("/login", loginCtrl);

export { router };