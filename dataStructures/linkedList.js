class LinkedList {
  constructor() {
    this.head = null;
  }

  addFirst(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  addLast(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = this.head.next;
      }
      currentNode.next = node;
    }
  }

  indexOf(node) {
    let id = -1;
    let currentNode = this.head;
    while (currentNode) {
      id += 1;
      if (currentNode === node) {
        break;
      }
      currentNode = currentNode.next;
    }
    if (currentNode !== node) {
      return -1;
    }
    return id;
  }
}

export default LinkedList;
