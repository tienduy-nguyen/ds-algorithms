class queue {
  constructor() {
    this.data = [];
  }
  add(record) {
    this.data.unshift(record);
  }
  remove() {
    this.data.pop();
  }
  peek() {
    return this.data[this.data.length - 1];
  }
}

function weave(sourceOne, sourceTwo) {
  const result = new Queue();
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove());
    }
    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove());
    }
  }
}
