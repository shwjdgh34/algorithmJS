// 에라토스테네스의체 이용하면 cpu 의 사용량을 메모리로 대체할 수 있다.
const isPrime = num => {
  for (let i = 2, sqrtNum = Math.sqrt(num); i <= sqrtNum; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const solution = numbers => {
  const selected = new Array(numbers.length).fill(false);
  const curNumber = '';
  let answer = [];
  answer = dfs(selected, numbers, curNumber, answer);
  console.log(answer);
  console.log([...new Set(answer)]);
  return [...new Set(answer)].length;
};

const dfs = (selected, numbers, curNumber = '', answer = []) => {
  console.log(curNumber);
  console.log(selected);
  if (curNumber != '' && isPrime(Number(curNumber))) {
    answer.push(Number(curNumber));
  }
  for (let i = 0; i < numbers.length; i++) {
    console.log('index', i);
    if (selected[i] === true) continue;
    selected[i] = true;
    dfs(selected, numbers, curNumber + numbers[i], answer);
    selected[i] = false;
  }
  return answer;
};

solution('17');
// solution('011');
// solution('012');
