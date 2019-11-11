
class Node {
    constructor(data) {
        this.data = data;
        this.previous = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.previous = this.top;
        this.top = newNode;
    }

    pop() {
        const topNode = this.top;
        this.top = topNode.previous;
        return topNode.data;
    }
}
