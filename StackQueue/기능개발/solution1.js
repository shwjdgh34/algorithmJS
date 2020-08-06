const solution = (progresses, speeds) => {
  let answer = [];
  let stack = [];
  const duration = progresses.map((x, i) => {
    return Math.ceil((100 - x) / speeds[i]);
  });
  console.log(duration);

  // reduce 생각해보기
  duration.map(x => {
    if (stack.length !== 0 && stack[0] < x) {
      answer.push(stack.length);
      stack = [];
    }
    stack.push(x);
  });
  answer.push(stack.length);
  return answer;
};

console.log(
  solution(
    [93, 30, 20, 55, 20, 93, 30, 20, 55, 20],
    [1, 30, 50, 5, 50, 1, 30, 50, 5, 50]
  )
);
