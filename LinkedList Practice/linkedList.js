
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    unshift(data) {
        const node = new Node(data);
        if (this.head) {
            node.next = head;
        }
        this.head = node;
    }
}
