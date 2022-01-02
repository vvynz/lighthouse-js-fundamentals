const loopyLighthouse = function (range, multiples, words) {
  let n = range[0];
  let m1 = multiples[0];
  let m2 = multiples[1];

  while (n <= range[1]) {
    if (n % m1 === 0 && n % m2 === 0) {
      console.log(words[0] + words[1]);
    } else if (n % m1 === 0) {
      console.log(words[0]);
    } else if (n % m2 === 0) {
      console.log(words[1]);
    } else {
      console.log(n);
    }
    n++;
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
