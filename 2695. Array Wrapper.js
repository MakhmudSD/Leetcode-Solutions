/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums) {
        this.nums = Array.isArray(nums) ? nums.flat(): [];
    }
}
/**
* @return {number}
*/
ArrayWrapper.prototype.valueOf = function() {
        return this.nums.reduce((sum, num) => sum + num, 0);
const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
console.log(obj1 + obj2);
}

/**
* @return {string}
*/
ArrayWrapper.prototype.toString = function() {
return `[${this.nums.join(",")}]`;
console.log(String(obj1))
console.log(String(obj2))
}

/**
* const obj1 = new ArrayWrapper([1,2]);
* const obj2 = new ArrayWrapper([3,4]);
* obj1 + obj2; // 10
* String(obj1); // "[1,2]"
* String(obj2); // "[3,4]"
*/