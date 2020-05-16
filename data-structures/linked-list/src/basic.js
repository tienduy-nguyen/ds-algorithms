//Source: https://codeburst.io/linked-lists-in-javascript-es6-code-part-1-6dd349c3dcc3

//Delare class of node and linked list
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}
let list = new LinkedList();

//***************************************************************/
//Inserting a node at the beginning of the singly linked list.
LinkedList.prototype.insertAtBeginning = function(data){
    //A new node object is created with property and newt = null
    let newNode = new Node(data);
    
    //The pointer next is assigned head pointer so that both pointers now point at the same node.
    newNode.next = this.head;

    //As we are inserting at the beginning the head pointer needs to now point the newNode.
    this.head = newNode;
    return this.head;
}


//***************************************************************/
//Inserting a node at the end of the singly linked list.
LinkedList.prototype.insertAtEnd = function(data){
    let newNode = new Node(data);

    //When head = null: the list is emptye, then head it self will point to the newNode
    if(!this.head){
        this.head = newNode;
        return this.head;
    }

    let tail = this.head;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
}


//***************************************************************/
//Inserting a node at given random position in a singly linked list.


//A helper function getAt() is defined to get to the desired position.
//This function can also be later used for performing delete operation from a given position.
LinkedList.prototype.getAt = function(index){
    let counter  = 0;
    let node = this.head;
    while(node){
        if(counter === index) return node;
        ++counter;
        node = node.next;
    }
    return null;
}

//The insertAt() function contains the steps to insert a node at a given index
LinkedList.prototype.insertAt = function(data, index){
    //if the list is empty: head = null
    if(!this.head){
        this.head = new Node(data);
        return ;
    }

    //if new node to be inserted at the front of the list
    if(index === 0){
        this.head = new Node(data, this.head);
        return;
    }
    const previous = this.getAt(index -1);
    let newNode = new Node(data);
    newNode.next = previous.next;
    previous.next = newNode;
    return this.head;

}


//***************************************************************/
//Deleting the first node in a singly linked list
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return;
    }
    this.head = this.head.next;
    return this.head;
}


//***************************************************************/
//Deleting the last node in a singly linked list

LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return;
    }
    if(!this.head.next){
        this.head = null;
        return;
    }
    let previous = this.head;
    let tail = this.head.next;
    while(tail.next !== null){
        previous = tail;
        tail = tail.next;
    }
    previous.next = null;
    return this.head;
}


//***************************************************************/
//Deleting a node from given random position in a singly linked list

LinkedList.prototype.deleteAt = function(index){
    if(!this.head){
        this.head = new Node(data);
        return;
    };
    if(index === 0){
        this.head = this.head.next;
        return;
    };
    // else, use getAt() to find the previous node.
    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
        return;
    }
    previous.next = previous.next.next;     
    return this.head

}


//***************************************************************/
//Deleting the singly linked list
LinkedList.prototype.deleteList = function(){
    this.head = null;
}
