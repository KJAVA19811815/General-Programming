class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor () {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push (val) {
    let node = new Node(val)
    if (this.size === 0) {
      this.first = node;
      this.last = node;      
    } else {
      let temp = this.first;
      this.first = node;
      this.first.next = temp;
    }
    this.size++;
  }

  pop() {
    if(!this.first) return null;
    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
stack.pop();
stack.pop();
console.log(stack);