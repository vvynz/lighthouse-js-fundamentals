function ageCalculator(name, a, b) {
  let age = b - a;
  let output = name + " is " + age + " years old.";
  return output;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
