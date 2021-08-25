"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require("morgan");
var app = express_1.default();
app.use(logger("dev"));
app.use(express_1.default.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//ROUTERS
// const designerRouter = require("./resources/designer/router");
// const guestRouter = require("./resources/guest/router");
// const eventRouter = require("./resources/event/router");
// const outfitRouter = require("./resources/outfit/router");
const router_1 = __importDefault(require("./resources/user/router"));
//ROUTES
// app.use("/designers", designerRouter);
// app.use("/guests", guestRouter);
// app.use("/events", eventRouter);
// app.use("/outfits", outfitRouter);
app.use("/users", router_1.default);
app.all("*", (req, res) => {
    res.json({ msg: "End of the line" });
});
module.exports = app; //
