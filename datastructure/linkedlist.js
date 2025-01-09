class Node {
  next = null;
  constructor(value) {
    this.value = value;
  }
}

class LinkedList {
  length = 0;
  head = null;
  
  add(value) {
    if(!this.head){
      this.head = new Node(value);
    } else if (this.head) {
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = new Node(value);
    }

    this.length++;
    return this.length;
  }

  search(index) {
    let count = 0;
    let current = this.head;

    while(count < index) {
      current = current?.next;
      count++;
    }
    return current?.value;
  }

  remove(value) {
    
  }
}

const ll = new LinkedList();
ll.add(1);
ll.add(3);
ll.add(2);
ll.add(4);
ll.add(5);
console.log(ll.search(3));
