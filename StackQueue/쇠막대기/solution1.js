const solution = arrangement => {
  let stack = [];
  let answer = 0;
  const arrangementArr = arrangement.split('');
  const newArr = [];
  // for of? for of를 쓰지말라?? 더 느리다?
  for (let i = 0; i < arrangementArr.length; i++) {
    if (arrangementArr[i] === '(' && arrangementArr[i + 1] === ')') {
      if (typeof newArr[newArr.length - 1] === 'number')
        newArr[newArr.length - 1] += 1;
      else newArr.push(1);
      i++;
    } else newArr.push(arrangementArr[i]);
  }
  let curLazor;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === ')') {
      curLazor = stack.pop();
      stack.pop();
      answer += curLazor + 1;
      if (stack[stack.length - 1] === '(') stack.push(curLazor);
      else {
        stack[stack.length - 1] += curLazor;
      }
    } else {
      stack.push(newArr[i]);
    }
  }

  console.log(newArr);
  return answer;
};

console.log(solution('()(((()())(())()))(())'));
