const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(nm => parseInt(nm));

const solution = ([n, m]) => {
  const selected = new Array(n + 1).fill(false);
  const answer = [];
  recursion(n, m, 0, selected, answer);
};
const recursion = (n, m, count, selected, answer) => {
  if (m === count) return console.log(answer);
  for (let i = 1; i <= n; i++) {
    if (selected[i]) continue;
    answer.push(i);
    selected[i] = true;
    recursion(n, m, count + 1, selected, answer);
    answer.pop();
    selected[i] = false;
  }
};

solution(input);
