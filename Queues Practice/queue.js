
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    push(data) {
        const newNode = new Node(data);

        if (this.back) {
            this.back.next = newNode;
        } else {
            this.front = newNode;
        }

        this.back = newNode;

    }

    pop() {
        const frontNode = this.front;
        this.front = frontNode.next;

        if (!this.front) {
            this.back = null;
        }

        return frontNode.data;
    }
}