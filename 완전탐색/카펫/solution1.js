const solution = (brown, yellow) => {
  for (let i = 3; ; i++) {
    for (let j = 3; j <= i; j++) {
      const brownCal = (i + j - 2) * 2;
      const yellowCal = (i - 2) * (j - 2);
      if (brownCal > 5000 || yellowCal > 2000000) {
        break;
      }
      if (brownCal === brown && yellowCal === yellow) return [i, j];
    }
  }
};

const solution2 = (brown, yellow) => {
  const x = (brown - 12) * 0.5;
  const y = yellow - brown + 8;
  const i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  const j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  console.log(i);

  var answer = [i, j];
  return answer;
};

console.log(solution(24, 24));
