/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos = 0;
    let neg = 0;

    for(let num of nums) {

        if(num > 0) {
            pos++
        } else if( num < 0){
            neg++
        }
    }
    return Math.max(pos, neg)
};

console.log(maximumCount([-2,-1,-1,1,2,3]))