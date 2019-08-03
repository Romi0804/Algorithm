// Solution 1 - 75.21%

const judgeSquareSum = c => {
  for (let a = 0; a <= c; a++) {
    const doubleB = c - a ** 2;
    if (doubleB <= 0 && c !== 0) {
      return false;
    }
    const B = Math.sqrt(doubleB);
    if (Number.isInteger(B)) {
      return true;
    }
  }
};
