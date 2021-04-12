let readArrange = [5, 4, 3, 2, 3, 1]
readArrange = [5,8,7,2,1,3,9]


function findMax(ary){
    let max = 0
    ary.forEach(el=>{
        if( el > max) max = el
    })
    return max
}
// 计数器排列
function countArrange(ary){
    if(ary.length < 2) {
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
    
    let sortIndex = 0

    counts.forEach((count,ind)=>{
        while(count > 0){
            ary[sortIndex++] = ind
            console.log('排排排',count, ind, sortIndex,ary);
            count--
        }
    })
    console.log(`--maxValue--`, maxValue);
    console.log(`--counts--`, counts);

    return ary
}

console.log(`after-countArrange：${countArrange(readArrange)}`);