// 排序算法
export let Ary = [1,2,3,4,5,6,7]

// 找最大-数组
function findMax(ary){
    let max = 0
    ary.forEach(el=>{
        if( el > max) max = el
    })
    return max
}
function swap(ary,oldInd,newInd){
    let oldVal = ary[oldInd]
    
    ary[oldInd] = ary[newInd]
    ary[newInd] = oldVal

    return ary;
}




// 计数器排列
export function countArrange(ary){
    let beginTime = (new Date().getTime())
    if (ary.length < 2) {
        console.error(`${ary}无法排列`);
        return false
    }

    console.log(`before-countArrange：${ary}`);
    const maxValue = findMax(ary)

    const counts = new Array(maxValue+1)

    ary.forEach(el => {
        if(!counts[el]){
            counts[el] = 0
        }
        counts[el]++
    });
    
    console.log(`--maxValue--`, maxValue);
    console.log(`--counts--`, counts);

    let sortIndex = 0

    counts.forEach((count,ind)=>{
        while(count > 0){
            ary[sortIndex++] = ind
            console.log('排排排',count, ind, sortIndex,ary);
            count--
        }
    })
    

    console.log(`排序用时：${new Date().getTime() - beginTime}`);
    return ary
}
Ary = [5, 8, 7, 2, 1, 3, 9]
Ary = [5,4,3,2,3,1]
// count [0,1,1,2,1,1]
// 

console.log(`计数排序：after-countArrange：${countArrange(Ary)}`);

// 洗牌
export function flushArrange(ary) {
    let beginTime = (new Date().getTime())
    for (let i = ary.length - 1; i > 0; i--) {
        const ranInd = Math.floor(Math.random()*(i+1));
        swap(ary,i,ranInd)        
    }
    
    console.log(`排序用时：${new Date().getTime() - beginTime}`);
    
    return ary
}

// console.log(`随机洗牌：after-countArrange：${flushArrange(Ary)}`);
