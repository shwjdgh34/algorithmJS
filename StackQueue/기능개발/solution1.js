const solution = (progresses, speeds) => {
  let answer = [];
  let stack = [];
  const duration = progresses.map((x, i) => {
    return Math.ceil((100 - x) / speeds[i]);
  });
  console.log(duration);
  duration.map(x => {
    if (stack.length === 0 || stack[0] >= x) {
      stack.push(x);
    } else {
      answer.push(stack.length);
      stack = [];
      stack.push(x);
    }
  });
  answer.push(stack.length);
  stack = [];
  return answer;
};

console.log(
  solution(
    [93, 30, 20, 55, 20, 93, 30, 20, 55, 20],
    [1, 30, 50, 5, 50, 1, 30, 50, 5, 50]
  )
);
