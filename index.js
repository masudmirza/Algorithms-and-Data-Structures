class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// const first = new Node('Hi');
// first.next = new Node('there');
// first.next.next = new Node('how');
// first.next.next.next = new Node('are');
// first.next.next.next.next = new Node('you');


class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    traverse () {
        let current = this.head;
        while (current) {
            console.log(current.val);
            current = current.next
        }
    }

    pop () {
        if (!this.head) return undefined;
        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }
}

const list = new SinglyLinkedList();
list.push('How');
list.push('Are');
list.push('You');
// console.log(list);
// console.log(list.head.next.next);
// console.log(list.traverse())
console.log(list)
console.log(list.pop())
console.log(list)