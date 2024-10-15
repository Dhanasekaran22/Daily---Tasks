import { pi } from "./constants"

export const areaOfCircle=(radius:number):number=>{
    return pi*radius*radius;
}

export const areaOfRectangle=(length:number,width:number): number=>{
    return length*width;
}