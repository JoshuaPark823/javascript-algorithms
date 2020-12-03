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
    
    // Base case, trivially true
    if (nums.length <= 2) {
        return true;
    }

    // Assign a boolean, initialize as first/second check
    let first = nums[0] <= nums[1];

    // Iterate from the second val to the end
    for (let i = 1; i < nums.length - 1; i++) {

        // If the current val is bigger than the next
        if (nums[i] > nums[i + 1]) {

            // Check the first/second check
            if (first) {

                // If next is smaller than previous, set the next as the current
                if (nums[i + 1] < nums[i - 1]) {
                    nums[i + 1] = nums[i];
                }

                first = false; // Set the first boolean as false
            }

            else {

                // We're dynamically replacing the first boolean, so if its false, we know the condition is violated
                return false; 
            }
        }
    }

    return true;

};

// TESTING
console.log(checkPossibility(([4,2,3])));
console.log(checkPossibility(([4,2,1])));
console.log(checkPossibility(([3,4,2,3])));



