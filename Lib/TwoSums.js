const nums = [564, 222, 999, 236, 377]
const map = ['百富12年单桶', '泰斯卡10年', '格兰杰 稀印', '格兰杰10年','费朗得十代传人']
             
const target = 800

var twoSum = function (nums, target) {
    let lib = {}

    for (let i = 0; i < nums.length;i++) {
        
        let lack = target - nums[i]
        if (nums[i] in lib) {

            console.log(`best choose:${map[lib[nums[i]]]}+${map[i]},共花费${(target - 100) * 0.9}元` );

            return [lib[nums[i]],i]
        }else{
            // console.log(`save`,lack,lib);
            lib[lack] = i
        }
    }
};

twoSum(nums, target)

// function testWhile(){
//     let i = 0
//     let z = 10
//     while(i < z){i++}

//     console.log(i);
// }
// testWhile()