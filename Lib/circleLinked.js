// 创建带环链表 
// 9 => 3 => 1 => 2 => 1 => 2
const cycleNode = {}
const cycle = {
    val:1,
    next:{
        val:2,
        next: cycleNode // next = cycle
    }
}
cycleNode.next = cycle
const head2 = {
    val:9,
    next: {
        val:3,
        next: cycle
    }
} 
console.log(`head2`,head2);
// 9 => 3 => 1 => 2 => 1 => 2
// 设置空对象
let tempLink = {};

// 设置循环链表
let cycleLink = {
    val: 2,
    next: {
        val: 0,
        next: {
            val: 4,
            next: tempLink, // 最后指向空对象
        },
    },
};

// 空对象指向循环链表，使链表变成真的环
tempLink.next = cycleLink;

// 设置其他节点，接着循环链表
const link = {
    val: 3,
    next: cycleLink,
};
// 3 -> 2 -> 0 -> 4 -> 2 -> 0 -> 4 -> cycle
console.log(`link`, cycleLink);


// console.log(head2);
// fast&slow正序
function hasCycle (head){

    if(!head || !head.next){
        return false
    }

    let fast = head.next
    let slow = head
    // console.log(`fast`,fast);
    // console.log(`slow`, slow);

    while(slow !== fast) {
        
        if(!fast || !fast.next){
            return false
        }

        fast = fast.next.next
        slow = slow.next
        // console.log(`fast1`, fast);
        // console.log(`slow2`, slow);
    }
    console.log('hasCycle');
    return true
}
// 标记路径法
// var hasCycle = function(head) {
//     while(head){
//         if(head.flag) return true
//         head.flag = true
//         head = head.next
//     }
//     return false
// };
hasCycle(head2)
// 速度取值解析
// 如果使用快慢指针的目的是寻找链表中间点位置，
// 那么取一倍的速度是非常直观的事情。如果使用
// 快慢指针的目的是判断链表是否是环形，那么实际
// 上我们希望的是快指针对慢指针的路程差精确等于环
// 绕一周的长度（实际上我们可以取在两周路程差相遇等情况
// 但是运行时间会加长），这样两个指针就相遇了。这样我们取每
// 步的速度差能够被环长度整除的数字。但是由于我们的算法预先
// 并不知道环的周长，所以要取能够被所有正整数整除的数字就只
// 能是1了，只要两个指针的速度差是一，那么在一个环里面，它们
// 就一定会相遇。比如速度分别为1和2，也可以是2和3。可见，快慢
// 指针在不同的场景里面取值策略是不一致的。在第二个场景里，重要的
// 是相对移动速度，而不是绝对速度，只要相对速度是1即可。那么绝对速
// 度要如何考虑呢？我们一般希望计算机对内存执行间接寻址的次数越少越
// 好，因为每一次在链表上的移动，都需要一次对内存的访问。访问次数越
// 少越好，所以选取 1和2 比 2和3 要好一些。这样恰好就是两倍的关系了。
// 如果存在其他场景，那么依然还是要具体场景具体分析的。

