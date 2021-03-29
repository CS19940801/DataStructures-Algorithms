// tree
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
const tree = [3, 9, 20, null, null, 15, 7, null, null, 1]
//          3
//       9     20
//          15    7
//              1
const treeExpand = {
    val:3,
    left:{
        val:9,
        left:null,
        right:null,
    },
    right:{
        val:20,
        left:{
            val:15,
            left:null,
            right:null
        },
        right:{
            val:7,
            left:{
                val:1,
                left:null,
                right:null
            },
            right:null
        },
    },
}
var maxDepth = function (root) {
    
    let res = null

    if (!root)  res = 0
    else {
        let left = maxDepth(root.left)
        let right = maxDepth(root.right)
        res = Math.max(left, right) + 1
    }
    console.log(res);
    return res
};

let run = maxDepth(treeExpand)
// console.log(run);
// log结果
// 1 root = 9
// 1
// 1
// 2
// 3
// 4