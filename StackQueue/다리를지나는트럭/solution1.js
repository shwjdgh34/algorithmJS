const solution = (bridge_length, weight, truck_weights) => {
  let timer = 0;
  let queue = [];
  let queueSum = 0;
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0);
  }
  let current_truck;

  current_truck = truck_weights.shift();
  queueSum -= queue.pop();
  queue.unshift(current_truck);
  queueSum += current_truck;
  timer++;

  while (queueSum) {
    queueSum -= queue.pop();
    current_truck = truck_weights.shift();

    if (weight >= queueSum + current_truck) {
      queue.unshift(current_truck);
      queueSum += current_truck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(current_truck);
    }
    timer++;
  }
  return timer;
};

// 내 풀이는 10000, 10, new Array(10000).fill(10) 인 경우에 엄청 오래걸린다!! => jest로 한번 테스트 해보자
const solution = (bridge_length, weight, truck_weights) => {
  // let을 적게 사용? private변수
  // 조건문도 적게? => 가독성 측면에서

  let timer = 0;
  let queue = [];
  let queueSum = 0;
  for (let i = 0; i < bridge_length; i++) {
    queue.push(0); //array
  }
  // queue = Array(bridge_length).fill(0);
  queue = [...Array(bridge_lenght).fill(0)];

  let current_truck;

  current_truck = truck_weights.shift();
  queueSum -= queue.pop();
  queue.unshift(current_truck);
  queueSum += current_truck;
  timer++;
  // ++ vs += antipattern?

  //do whil에 관하여
  while (queueSum) {
    queueSum -= queue.pop();
    current_truck = truck_weights.shift();
    // unshift+ pop() 조합을 shift+push()조합으로 바꿨더니 250ms 에서 29ms로 줄었다 => unshift는 시간이 많이 드는 작업!
    if (weight >= queueSum + current_truck) {
      queue.unshift(current_truck);
      queueSum += current_truck;
    } else {
      queue.unshift(0);
      truck_weights.unshift(current_truck);
    }
    timer++;
  }
  return timer;
};
