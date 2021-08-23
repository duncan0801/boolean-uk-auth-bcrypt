"use strict";
var express = require("express");
// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require("morgan");
var app = express();
app.use(logger("dev"));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//ROUTERS
const designerRouter = require("./resources/designer/router");
const guestRouter = require("./resources/guest/router");
const eventRouter = require("./resources/event/router");
const outfitRouter = require("./resources/outfit/router");
//ROUTES
app.use("/designers", designerRouter);
app.use("/guests", guestRouter);
app.use("/events", eventRouter);
app.use("/outfits", outfitRouter);
module.exports = app;
