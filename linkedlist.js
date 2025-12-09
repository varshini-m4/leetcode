class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        
        current.next = newNode;
    }

    print(){
        let current = this.head;
        var result = "";
        while(current){
            result+=current.data + "->";
            current = current.next;
        }
        result+="null";
        console.log(result);
    }

    insertAtBeginning(data){
        const firstNode = new Node(data);
        firstNode.next = this.head;
        this.head = firstNode;
    }

    deleteNode(data){
        if(!this.head) return;
        if(this.head.data === data){
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while(current.next && current.next.data !== data){
            current = current.next;
        }
        if(current.next){
        current.next = current.next.next;
        }
    }
}

const list = new LinkedList();
list.append(20);
list.append(2);
list.append(10);
list.append(70);
list.print();
list.insertAtBeginning(4);
list.insertAtBeginning(27);
list.print();
list.deleteNode(20);
list.deleteNode(10);
list.print();
list.deleteNode(27);
list.deleteNode(4);
list.print();


// Linked List is a linear data structure where data is not stored in continous manner, and consist of elements called nodes, 
// it has 2 values. data and next, data has the value and next has the pointer to the next node in the list
// Singly linked - Value and pointer, Last node next is null
// Doubly linked - 2 pointer and data, One pointer points the next and next points the previous, last node is null
// Circular linked - singly or doubly and last node next points the head.

// 1 -> 2-> 3-> 4->5-> 6-> null
i =1
j=1
i=2
j=3
i=3
j=5
i=4
j=6