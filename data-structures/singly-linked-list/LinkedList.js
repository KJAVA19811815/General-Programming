class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;   
    }
    this.length += 1;
    return this
  }

  pop () {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift () {
    if (!this.head) return undefined;
    let newHead = this.head.next;
    let oldHead = this.head;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  unshift (val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;      
    } else {
      let newNode = new Node(val)
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index >=  this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;

  }

  set(val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true
    }
    return false;
  }

  insert (val, index) {
    if (index < 0 || index > this.length) return false
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    let previous = this.get(index - 1);
    let newNode = new Node(val);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove (index) {
    if (index < 0 || index > this.length) return undefined
    if (index === this.length - 1) {
      this.pop();
      return true;
    }
    if (index === 0) {
      this.shift();
      return true;
    }

    let previous = this.get(index - 1);
    let removed = previous.next;
    previous.next = removed.next;
    this.length--;
    return removed
  }

  reverse () {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) { 
      next = node.next
      node.next = prev;
      console.log("NODE", node);
      prev = node;
      console.log("PREV", prev);
      console.log("NEXT", next);
      node = next;
    }
    return this;
  }
}

list = new LinkedList();
list.push("Karun");
list.push("GOAT");  
// console.log(list.shift());
// console.log(list.shift());
// console.log(list.push("Dance"));
// console.log(list.unshift("Jump"));
// console.log(list.get(1));
// console.log(list.set("1234", 10));
// console.log(list.set("1234", 1));
// console.log(list.insert("Thor", 2));
// console.log(list.remove(1));
// console.log(list);
// list.reverse();
console.log(list);