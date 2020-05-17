class Node{
    constructor(val, next = null, prev = null){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.prev = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            let oldHead= this.head;
            oldHead.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
        }
        this.length++;
        return this.head;
    }
    get(index){
        if(index <0 || index >= this.length) return null;
        let middle = this.length/2;
        let count;
        let current;
        if(index <= middle){
            count = 0;
            current = this.head;
            while(count!== index){
                current = current.next;
                ++count;
            }
        } else{
            count = this.length -1;
            current = this.tail;
            while(count!== index){
                current = current.prev;
                --count;
            }
        }
       return current;
    }
    set(index, val){
        if(index <0 || index >= this.length) return false;
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index <0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let previous = this.get(index-1);
        if(!previous) return false;
        let newNode = new Node(val);
        let nextNode = previous.next;
        previous.next = newNode;
        newNode.prev = previous;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index<0 || index >= this.length) return undefined;
        if(index ===0) return this.shift();
        if(index === this.length-1) return this.pop();
        let previous = this.get(index-1);
        if(!previous) return undefined;
        let removed = previous.next;
        let afterRemoved = previous.next.next;
        previous.next = afterRemoved;
        afterRemoved.prev = previous;
        this.length--;
        return removed;
    }
    toArray(){
        let arr = [];
        let current = this.head;
        while(current){
            arr.push(current.val);
            current = current.next;
        }
        return arr;
    }
}

let list = new DoublyLinkedList();
list.push('Hello');
list.push('World');
list.push('Hi');
list.push('Hi1');
list.push('Hi2');
list.pop();
list.shift();

console.log(list)
console.log(list.toArray())
