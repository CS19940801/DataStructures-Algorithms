// 栈
// Es6+ Object
class StackObj{
    constructor (){
        this._data = {}
        this._count = 0
    }
    push(){
        
    }
}
// Es5- Array
function StackAry(){
    this._data = []
}/*  */

StackAry.prototype = {
    push:function(...args){
        this._data.push(...args)
        return this._data.length
    },
    pop:function(){
        this._data.pop()
        return this._data.length
    },
    peek:function(){
        return this._data[this._data.length-1]
    },
    isEmpty:function(){
        return this._data.length === 0
    },
    clear:function(){
        this._data = []
    },
    size:function(){
        return this._data.length
    },
    outData:function(link){
        return this._data.join(link)
    }   
}

function Stack(obj){
    this._data = {}
}

Stack.prototype = {
    show:function(...arg){
        if (this.push && arg){
            this.push(...arg)
        }
        return this._data
    },
}

let stack = new Stack()

let stack1 = new StackAry()

stack1.push(1)

console.log(`stack1-outData`, stack1.outData());
console.log(`stack1-peek-call`, stack.show.call(stack1,'call',1,2)); // test call
console.log(`stack1-peek-apply`, stack.show.apply(stack1,['apply',1,2])); // test apply
console.log(`stack1-peek-bind`, stack.show.bind(stack1,'bind',1,2)()); // test apply

console.log(`stack1-outData`, stack1.outData('-'));


console.log(`Hello Deno`);


export {
    StackObj,
    StackAry
}
