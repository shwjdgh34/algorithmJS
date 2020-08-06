// 정규표현식으로 풀면 어떨까?
const solution = baseball => {
  let answer = 0;
  const len = baseball.length;

  for (let i = 123; i <= 987; i++) {
    const number = i.toString();

    if (
      number.charAt(0) == number.charAt(1) ||
      number.charAt(1) == number.charAt(2) ||
      number.charAt(2) == number.charAt(0) ||
      // number.charAt(1) == '0' ||
      // number.charAt(2) == '0'
      number.indexOf('0') !== -1
    )
      continue;

    let flag = true;
    for (let j = 0; j < len; j++) {
      const callNumber = baseball[j][0].toString();
      const strike = baseball[j][1];
      const ball = baseball[j][2];

      let countStrike = 0;
      for (let k = 0; k < 3; k++) {
        if (number.charAt(k) === callNumber.charAt(k)) countStrike++;
      }

      if (countStrike !== strike) {
        flag = false;
        break;
      }
      let countBall = 0;
      for (let k = 0; k < 3; k++) {
        if (
          number.indexOf(callNumber.charAt(k)) !== -1 &&
          number.indexOf(callNumber.charAt(k)) !== k
        )
          countBall++;
      }

      if (countBall !== ball) {
        flag = false;
        break;
      }
    }

    if (flag) answer++;
  }

  return answer;
};

console.log(
  solution([
    [123, 1, 1],
    [356, 1, 0],
    [327, 2, 0],
    [489, 0, 1]
  ])
);
