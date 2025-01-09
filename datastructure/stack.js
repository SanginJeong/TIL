//  후입선출

class Stack {
  arr = [];

  push(value) {
    return this.arr.push(value); // push의 return = 길이
  }

  pop() {
    return this.arr.pop();
  }


  top() {
    return this.arr.at(-1);
  }

  get length() {
    return this.arr.length;
  }
}

const stack = new Stack();

stack.push(1); // 1
stack.push(5); // 2
stack.push(3); // 3
stack.push(4); // 4
stack.push(2); // 5
console.log(stack.length);
stack.top(); // 2
stack.pop(); // 2   ,  [1,5,3,4]
stack.top(); // 4