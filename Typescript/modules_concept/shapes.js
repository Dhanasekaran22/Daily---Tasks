"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.areaOfRectangle = exports.areaOfCircle = void 0;
var constants_1 = require("./constants");
var areaOfCircle = function (radius) {
    return constants_1.pi * radius * radius;
};
exports.areaOfCircle = areaOfCircle;
var areaOfRectangle = function (length, width) {
    return length * width;
};
exports.areaOfRectangle = areaOfRectangle;
