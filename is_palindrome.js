/**
 * Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
 * Note: For the purpose of this problem, we define empty string as valid palindrome.
 * 
 * Example 1:
 * Input: "A man, a plan, a canal: Panama"
 * Output: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {

    // ignore non-alphanumeric and case
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // two iterators, one from the front and one from the back closing in
    for(let front = 0, back = s.length - 1; front < back; front++, back--) {
        if (s[front] != s[back]) {
            return false;
        }
    }

    return true;
};

// Unit Testing
const unit_testing = () => {
    let str = ["hannah", "hello", "palindrome","1221", "mom", "racecar", "race a car", "A man, a plan, a canal: Panama"];
    str.forEach(string => console.log(isPalindrome(string)));
}
unit_testing(); 
