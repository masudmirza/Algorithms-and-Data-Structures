class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue (val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue () {
        if (!this.first) return null;

        let temp = this.first;
        if (this.first === this.last) this.last = null;
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}


const queue = new Queue();
console.log(queue.enqueue('1'));
console.log(queue.enqueue('2'));
console.log(queue.enqueue('3'));
console.log(queue);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);

// Big O
// Insertion - O(1)
// Removal - O(1)
// Searching - O(N)
// Access - O(N)
