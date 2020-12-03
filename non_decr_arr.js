/**
 * Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.
 * We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).
 * 
 * Example:
 * Input: nums = [4,2,3]   
 * Output: true
 * Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = (nums) => {
    
    /**
     * logic:
     * initialize a flag
     * iterate through, if we see that a[i] > a[i + 1], then toggle the flag
     * keep iterating, 
     * if we find another, it'll enter the flag conditional
     * if the flag had already been toggled before, return false
     * if the flag is ONLY toggled once, return true
     * 
     * 
     * is there a way we can just break out of the loop and return false if its already set?
     */

    let flag = 0;

    // goes from a[0] -> a[l-2] (second last)
    for (let i = 0; i <= nums.length - 2; i++) {

        if (nums[i] > nums[i + 1]) {
            flag++;
        }
    }

    if (flag > 1) {
        return false;
    }
    else {
        if (flag > 0) {
            return true;
        }
    }
};

// TESTING
console.log(checkPossibility(([4,2,3])));
console.log(checkPossibility(([4,2,1])));
console.log(checkPossibility(([3,4,2,3]))); //shit need to check all previous, cuz if we change 4, n[1] still > than 2



