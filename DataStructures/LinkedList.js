// 链表
function defaultEquals(a,b) {
    return a === b
}
class Node {
    constructor(el) {
        this.el = el
        this.next = undefined // 链表元素 默认next为 undefined
    }
}

class LinkedList {
    constructor(equalsFn = defaultEquals){
        
        this.count = 0
        this.head = undefined
        this.equalsFn = equalsFn
    }
    push(el) { // 向尾部加入元素
 
        const node = new Node(el)
        let current;
        
        if (this.head == null) { // 如果是第一个元素
            
            this.head = node
        }else { // 不是第一个
            
            current = this.head
            
            while(current.next != null) { // 找到没有next 
            
                current = current.next
            }
            
            current.next = node // 将next赋值上新元素 建立链接
        }

        this.count++ // 链表长度++
    }
    removeAt(index){
        // 检查边界 确保在链表范围内
        if(index >= 0 && index < this.count) {
           
            let current = this.head // 当前=前一个

            if (index === 0) { // 移除第一项的话 
                
                this.head = current.next // undefined
            }else { // 非第一项
                
                let previous; // >0  <count

                for (let i = 0; i < index; i++) { // 找到要删除的位置
                    
                    previous = current      // 前一个 = 当前
                    current = current.next  // 把后面的往前移动  当前=当前的下一个 
                }
                // 将previos和current的下一项链接起来,跳过current,从而移除它 前一个的下一个 = 当前的下一个 
                previous.next = current.next
            }

            this.count--; // 链表长度-1
            return current.el; // 返回当前的el
        }

        return undefined // 不再边界内 返回undefined
    }
    getElementAt(index){
        
        if (index >= 0 && index <= this.count) {  // 检查边界 确保在链表范围内
            
            let node = this.head
            for (let i = 0; i < index; i++) {

                node = node.next
            }
            console.log(`node`,node);
            return node
        }
        
        return undefined
    }
}

let lk1 = new LinkedList()

lk1.push(1)
lk1.push(2)
// lk1.removeAt(1)

console.log(`链表长度`,lk1.count);
console.log(`getElementAt`, lk1.getElementAt(0));
console.log(`lk1链表`, lk1);


export {
    LinkedList
}

// leetcode两数相加
// let l1 = [2, 4, 3], l2 = [5, 6, 4]
let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
// 输出：[7, 0, 8]
// 解释：342 + 465 = 807.
var addTwoNumbers = function (l1, l2) {
    let n1 = Number(l1.join(''))
    let n2 = Number(l2.join(''))
    console.log(`--n1,n2--`, n1,n2);
    let sum = n1 + n2
    let res = sum.toString().split('').reverse()
    return res
};

console.log(`--addTwoNumbers--`, addTwoNumbers(l1,l2));