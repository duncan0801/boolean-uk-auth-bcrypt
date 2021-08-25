import { Router } from "express";
import { loginUser } from "./controller";

const loginRouter = Router();

loginRouter.route("/login").post(loginUser);

export default loginRouter;
