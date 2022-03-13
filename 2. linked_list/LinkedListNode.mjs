
export class LinkedListNode{
    value = null;
    next = null

    constructor(value, next = null){
        this.value = value
        this.next = next
    }


    toString(callback){
        return callback? callback(this.value) : this.value;
    }
}

export class LinkedList{
    list = []
    
    constructor(){
        /** @var LinkedListNode */
        this.head = null
        this.tail = null
    }

    prepend(value){
        const node = new LinkedListNode(value, this.head)

    
    }
}