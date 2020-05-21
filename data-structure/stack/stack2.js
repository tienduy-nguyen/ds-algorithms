class Stack {
  constructor() {
    this.data = [];
  }
  push(record) {
    this.data.push(record);
  }
  pop() {
    this.data.pop();
  }
  peek() {
    this.data[this.data.length - 1];
  }
}
