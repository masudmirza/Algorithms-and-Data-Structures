class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTrees {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    if (!found) return undefined;

    return current;
  }

  // Breadth First Search
  BFS() {
    let node = this.root,
        data = [],
        queue = [];
    queue.push(node);

    while (queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    return data;
  }

  // Depth First Search

  DFSPreOrder() {
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

  DFSPostOrder() {
    let data = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.value);
    }

    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    let data = [];

    function traverse(node) {
        if (node.left) traverse(node.left);
        data.push(node.value);
        if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return data;
  }
}

let tree = new BinarySearchTrees();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//     10
//  6     15
//3   8     20   

// console.log(tree.find(3));
// console.log(tree.find(111));

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());

// let tree = new BinarySearchTrees();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// Insertion - O(log n)
// Searching - O(log n)
