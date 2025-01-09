class Queue {
  arr = [];

  enqueue(value) {
    return this.arr.push(value);
  }

  dequeue() {
    return this.arr.shift();
  }

  peek() {
    return this.arr[0];
  }

  get length() {
    return this.arr.length;
  }
}

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(2);
// [1,5,3,4,2];
console.log(queue.length); // 5
queue.dequeue(); // [5,3,4,2] 
queue.peek(); // 5
