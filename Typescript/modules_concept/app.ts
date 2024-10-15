import { areaOfCircle, areaOfRectangle } from "./shapes";

const circleRadius=5;
const rectangleLength=10;
const rectangleWidth=4;

const circleArea=areaOfCircle(circleRadius);
console.log(`Area of the circle : ${circleArea}`);

const rectangleArea=areaOfRectangle(rectangleLength,rectangleWidth);
console.log(`Area of Rectangle : ${rectangleArea}`);