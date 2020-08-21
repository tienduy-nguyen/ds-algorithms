class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    const node = this.root;
    // Check tree, if root == null, node Date become a root
    if (node === null) {
      this.root = new Node(data);
      return;
    }

    // Using recursion
    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        }
        return searchTree(node.left);
      }
      if (data > node.data) {
        if (node.right === null) {
          node.right = new Node(data);
          return;
        }
        searchTree(node.right);
      }
      return null;
    };
    return searchTree(node);
  }
}
