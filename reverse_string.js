/**
 * Write a function that reverses a string. The input string is given as an array of characters char[].
 * Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
 * You may assume all the characters consist of printable ascii characters.
 * 
 * Example 1:
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {

    // Iterate from 0 -> the end and vice versa simultaneously
    for(let front = 0, back = s.length - 1; front < back; front++, back--) {

        // Simple swap logic with a temp variable to hold the value
        let temp = s[front];
        s[front] = s[back];
        s[back] = temp;
    }
};

/**
 * @param {*} none
 * @return {void} return test results
 */
const testing = () => {

    const test_cases = [
        ["h","e","l","l","o"], 
        ["H","a","n","n","a","h"]
    ];

    // Print original value
    test_cases.forEach((output) => {
        let original = "";
        let reversed = "";
        for(let i = 0; i < output.length; i++) {
            original += output[i];
        }
        console.log(original);
        reverseString(output);
        for(let i = 0; i < output.length; i++) {
            reversed += output[i];
        }
        console.log(reversed);
    });
};

testing();