function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    console.log("Undefined");
  } else {
    return length * width;
  }
}

function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    console.log("Undefined");
  } else {
    return (base * height) / 2;
  }
}

function calculateCircleArea(radius) {
  if (radius < 0) {
    console.log("Undefined");
  } else {
    return Math.PI * radius * radius;
  }
}

console.log(calculateRectangleArea(10, 5));
console.log(calculateRectangleArea(1.5, 2.5));
console.log(calculateRectangleArea(10, -5));

console.log(calculateTriangleArea(10, 5));
console.log(calculateTriangleArea(3, 2.5));
console.log(calculateTriangleArea(10, -5));

console.log(calculateCircleArea(10));
console.log(calculateCircleArea(3.5));
console.log(calculateCircleArea(-1));
