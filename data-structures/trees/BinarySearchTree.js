class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert (val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          } else {
            current = current.left
          }
        } else if (val > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          } else {
            current = current.right
          }
        }
      }
    }
  }

  find (val) {
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    while(current && !found) {
      if (val < current.value) {
        current = current.left
      } else if (val > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    return current;

  }

  // Breath first search
  bfs () {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);      
    }
    return data;
  }

  // Depth first search

  dfsPreOrder () {
    let data = [];
    let current = this.root;

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;

  }

  dfsPostOrder () {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(current);

    return data;
  }

  dfsInOrder () {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);      
      if (node.right) traverse(node.right);
    }
    traverse(current);

    return data;
  }
}

 //   10
//  6   15
// 3 8     20
bst = new BinarySearchTree();
bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);
// console.log(bst);
console.log(bst.bfs());
console.log(bst.dfsPreOrder());
console.log(bst.dfsPostOrder());
console.log(bst.dfsInOrder());

// console.log(bst.find(555));