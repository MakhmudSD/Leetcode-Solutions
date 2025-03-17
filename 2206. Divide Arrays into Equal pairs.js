// You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var divideArray = function (nums) {
  let countMap = {};
  for (let num of nums) {
    countMap[num] = (countMap[num] || 0) + 1;
  }

  for (let count of Object.values(countMap)) {
    if (count % 2 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(divideArray([[1, 2, 3, 4]]));