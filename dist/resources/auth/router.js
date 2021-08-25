"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controller_1 = require("./controller");
const loginRouter = express_1.Router();
loginRouter.route("/login").post(controller_1.loginUser);
exports.default = loginRouter;
