class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      ++count;
      current = current.next;
    }
    return count;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }
  clear() {
    this.head = null;
    return;
  }
  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
    return;
  }
  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return;
  }
  insertLast(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return;
  }
  getAt(index) {
    if (index < 0) return null;
    let count = 0;
    let node = this.head;
    while (node) {
      if (count === index) return node;
      ++count;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head || index < 0) return false;
    if (index === 0) {
      this.head = this.head.next;
      return true;
    }
    let current = this.head;
    let prev = current;
    let count = 0;
    while (current) {
      if (count === index) {
        prev.next = current.next;
        return true;
      }
      ++count;
      prev = current;
      current = current.next;
    }
    return false;
  }
  removeAt1(index) {
    if (!this.head || index < 0) return;
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(index - 1);
    if (prev) {
      prev.next = prev.next.next;
    }
    return;
  }
  insertAt(data, index) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const prev = this.getAt(index - 1) || this.getLast();
    const newNode = new Node(data, prev.next);
    prev.next = newNode;
    return;
  }

  // list.forEach((node, index) => {
  //   node.data += 10;
  //   });
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  // for (let node of list) {
  //   node.data += 10;
  //   }
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

let list = new LinkedList();
list.insertFirst('a');
list.insertFirst('b');
list.insertAt('data', 2);
console.log(list);
// console.log(list.insert());
