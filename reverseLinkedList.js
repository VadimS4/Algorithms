function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

let reverseList = function (head) {
    let node = head;
    let previous = null;

    while (node) {
        // save next
        let get_next = node.next;
        // reverse pointer
        node.next = previous;
        // increment previous to current node
        previous = node;
        // increment node to next node or null at end of list
        node = get_next;
    }
    return previous;   // Change the list head !!!
};