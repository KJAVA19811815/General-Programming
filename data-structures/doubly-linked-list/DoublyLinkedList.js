class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push (val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return undefined;
    let poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift () {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift (val) {
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      newNode.next = oldHead;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get (index) {
    if (index < 0 || index >=  this.length) return undefined;

    let halfLength = Math.ceil(this.length / 2);

    if (index <  halfLength) {
      let counter = 0;
      let current = this.head;
      console.log("START");
      while(counter != index) {
        current = current.next;
        counter++;
      }
      return current;
    } else {
      console.log("END");
      let counter = this.length - 1;
      let current = this.tail;

      while(counter != index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  set (val, index) {
    let node = this.get(index);
    if (node) {
      node.val = val
      return true;
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

    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let next = previous.next;

    newNode.prev = previous;
    newNode.next = next;
    previous.next = newNode;
    next.prev = newNode;
    this.length++
    return true;
  }

  remove (index) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length - 1) return this.pop();

    if (index === 0) return this.shift();

    let removed = this.get(index);
    let previous = removed.prev;
    let next = removed.next;
    previous.next = next;
    next.prev = previous;
    this.length--;
    removed.next = null;
    removed.prev = null;    
    return removed;
  }

  reverse () {
    // TODO
  }
}

list = new DoublyLinkedList();
list.push("Federer");
list.push("Nadal");
list.push("Djokovic");
list.push("Murray");
list.pop();
list.shift();
list.unshift("federer");
list.push("Tsonga");
list.push("Agassi");
// console.log(list.get(1));
// console.log(list.get(4));
// console.log(list.set("Sampras", 4));
console.log(list);
console.log("INSERT", list.insert("Borg", 5))
console.log("REMOVED", list.remove(1));
// console.log(list.get(2));
console.log(list);
