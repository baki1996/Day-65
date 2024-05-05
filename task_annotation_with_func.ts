
//TYPE ANNOTATIONS WITH FUNCTION *


// Function to calculate the area of a square
function calculateSquareArea(lengthSquare: number, widthOfSquare: number): number {
    return lengthSquare * widthOfSquare;
  }
  
  // Calling the function with valid arguments
  const lengthSquare = 4;
  const widthOfSquare = 4;
  const area = calculateSquareArea(lengthSquare, widthOfSquare);
  console.log(`The area of the Square is: ${area}`);