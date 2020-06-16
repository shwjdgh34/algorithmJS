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
