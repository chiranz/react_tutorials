const MAX_STACK_SIZE = 100;

class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    if (this.items.length >= MAX_STACK_SIZE) {
      throw new Error();
    }
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error();
    }
    return this.items.pop();
  }
  isEmpty() {
    return this.items.length === 0;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error();
    }
    return this.items[this.items.length - 1];
  }
}
