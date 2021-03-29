
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。



// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回[0, 1]

// p1 自制
var twoSum = function (nums, target) {
    let res = []
    for (let i=0; i < nums.length; i++) {
        for (let j=0; j < nums.length; j++) {
            if (i !== j) {
                let sum = nums[i] + nums[j]
                console.log(i,j);
                if (sum === target) {
                    res[0] = i
                    res[1] = j
                    console.log(res);
                    return res;
                }
            }
        }
    }
};

twoSum([2, 7, 11, 15],9)

// 优质解  时间快，空间占用较大
// var twoSum = function (nums, target) {
//     let map = {};//key数字 value下标
//     let loop = 0;//循环次数
//     let dis;//目标与当前值的差
//     while (loop < nums.length) {
//         dis = target - nums[loop];
//         if (map[dis] != undefined) {
//             return [map[dis], loop];
//         }
//         map[nums[loop]] = loop;
//         loop++;
//     }
//     return;
// };

// 思路清奇~比较看数据
// 此处撰写解题思路
// 主要思路是通过差值来寻找。
// 1.用while循环从后往前遍历。
// 2.每次遍历先pop最后一个值，再通过indexOf来查找是否有对应的差，pop的好处是为了防止两个数相等。
// 3.如果有对应的值，索引就是indexOf和数组的长度。

// 作者：lin - 536
// 链接：https://leetcode-cn.com/problems/two-sum/solution/liang-shu-zhi-he-by-lin-536/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
// var twoSum = function (nums, target) {
//     let i = nums.length;
//     while (i > 1) {
//         let last = nums.pop();
//         if (nums.indexOf(target - last) > -1) {
//             return [nums.indexOf(target - last), nums.length]
//         }
//         i--
//     }
// };