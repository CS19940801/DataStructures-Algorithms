// 搜索类算法 一般都会配合排序使用
// 例如
// import { Ary } from './arrange'
export let Ary = [1, 2, 3, 4, 5, 6, 7]

function createRanAry(){
    let highest = Math.floor(Math.random()*1000)
    Ary = new Array(highest-1)

    for (let i = 0; i < highest; i++) {
        Ary[i] = i
    }
}

export let target = 3 

export function showRange (ary,low,high) {
    console.log(`范围：${low}-${high}`);   

    return `[${ary.slice(low,high)}]`
}
// 找差距
export function diffFn(a,b){   
    return a-b
}
// 黑板
export function paramBlackboard(name,val){
    return `${name}：${val}`
}
// 展示
export function showCal(calName,calFn) {
    console.log(`Ary：[${Ary}] target：${target}`);
    console.log(`${calName}：${calFn(Ary, target)}`);
    console.log(`--------------------------------`);
}
// 二分搜索(前提排序好的数组)
// 1.选择数组中间值(mid)
// 2.中间值是否 = 目标(target)，是则返回
// 3.目标值 > 中间值，去小的方向找（high = mid - 1）返回步骤1
// 4.目标值 < 中间值，去大的方向找（low = mid + 1）返回步骤1
// 时间复杂度O(logn)

export function binarySearch(ary,target){
    let beginTime = (new Date().getTime())
    let low = 0
    let high = ary.length - 1
    
    // while( target > ary[low] && target > ary[high]) {
    while( low < high ) {
        let mid = Math.floor(high - low / 2)
        console.log(`搜索范围：${showRange(Ary,low,high)}`);
        if( target > ary[mid] ){
            low = mid + 1
        }else if(target < ary[mid]) {
            high = mid -1
        }else {
            console.log(`计算用时：${new Date().getTime() - beginTime}`);
            return mid
        }
    }

    return 'no here target'
}
createRanAry()
showCal('二分搜索', binarySearch)

// 内插搜索 (魔术搜索)
// 1.使用 position 公式选取一个值
// 2.如果这个值 = 目标值 则返回
// 3.如果 pos < target, 去小的方向找 返回步骤1
// 3.如果 pos > target, 去大的方向找 返回步骤1

export function interpolationSearch(ary,target) {
    let beginTime = (new Date().getTime())
    const pb = paramBlackboard
    const { length } = ary // 取长度
    let low = 0
    let high = length - 1
    let pos = -1
    let delta = -1 // 戴儿塔！

    while( low <= high && (target >= low) && (target <= high)) {

        delta = diffFn(target, ary[low]) / diffFn(ary[high], ary[low])
        pos = low + Math.floor((high -low)*delta)
        
        console.log(`delta演算：${pb('target', target)} - ${pb('ary[low]', ary[low])} = ${pb('差', diffFn(target, ary[low]))} / ${pb(`ary[high]`, ary[high])} - ${pb(`ary[low]`, ary[low])} = ${pb('差', diffFn(ary[high], ary[low]))} = ${pb('delta', delta)}`);
        console.log(`pos演算：${pb('low', low)} + [(${pb('high', high)} - ${pb('low', low)}) x ${pb('delta', delta)}] = ${pb('pos', pos)}`);

        console.log(`搜索范围：${showRange(Ary, low, high)}`);
        if(ary[pos] == target) {
            console.log(`计算用时：${new Date().getTime() - beginTime}`);
            return pos
        }
        if(ary[pos] < target) {
            low = pos + 1
        } else {
            high = pos - 1
        }
    }

    return 'here no target'
}

showCal('内插搜索', interpolationSearch)

