"use strict";
//TYPE ANNOTATIONS WITH FUNCTION *
Object.defineProperty(exports, "__esModule", { value: true });
// Function to calculate the area of a square
function calculateSquareArea(lengthSquare, widthOfSquare) {
    return lengthSquare * widthOfSquare;
}
// Calling the function with valid arguments
const lengthSquare = 4;
const widthOfSquare = 4;
const area = calculateSquareArea(lengthSquare, widthOfSquare);
console.log(`The area of the Square is: ${area}`);
