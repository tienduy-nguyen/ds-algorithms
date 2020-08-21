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

  findMin() {
    let current = this.root;
    while (current !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (date === node.data) {
        // no child node
        if (node.left == null && node.right == null) {
          return null;
        }
        // no left node
        if (node.left == null) {
          return node.right;
        }
        //no right node
        if (node.right == null) {
          return node.left;
        }

        // has two child node
        let tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = remove(node.right, date);
        return node;
      }
      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;
      }
      node.right = remove(node.right, data);
      return node;
    };
    this.root = removeNode(this.root, data);
  }
}
