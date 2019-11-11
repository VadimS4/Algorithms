
class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}

const newTree = new Tree();
const rootNode = new Node("first");
newTree.root = rootNode;
const child1 = new Node("1");
const child2 = new Node("2");
rootNode.children.push(child1);
rootNode.children.push(child2);