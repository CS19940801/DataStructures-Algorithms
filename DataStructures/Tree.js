// 数组表示二叉树
// [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]
//          0                n=0
//    1          2           n=1
//  3   4      5    6        n=2
// 7 8 9 10  11 12 13 14     n=3
// 左子 2*index+1 右子 2*index+2 父（index-1)/2（如果出.5则index为父节点右子节点 取用时舍弃.5）
// index = 1 左 3 右4 父0
// index = 4 左9 右10 父6

// 二叉搜素树 BST BinarySearchTree
// 设当前节点为n 左子节点<n 右子节点>n
export class Node {
    constructor(key) {
        this.key = key
        this.left = null;
        this.right = null;
    }
}

// 堆 特殊的二叉树

// 斐波那契数列
// 从第三位开始 n = (n-1) + (n+2)
// [1,2 ,3 ,5 , 8, 13, 21] 