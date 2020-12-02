/**
 * Given an array of integers nums.
 * A pair (i,j) is called good if nums[i] == nums[j] and i < j.
 * 
 * Return the number of good pairs.
 * 
 * Example:
 * Input: nums = [1,2,3,1,1,3]
 * Output: 4
 * Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {

    let count = 0;
    
    // start i from index 0, j from the final index, and have them "close in" on eachother.
    // stops when i strictly < j 
    for (let i = 0,j = nums.length - 1; i < j; i++, j--) {

        // if we find a good pair, incr the count
        if (nums[i] === nums[j]) {
            count++;
        }
    }

    return count;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));