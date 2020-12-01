/**
    Input: mat = [[1,2,3],
                 [4,5,6],
                 [7,8,9]]
    Output: 25
    Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
    Notice that element mat[1][1] = 5 is counted only once.
 */

/**
 * @param {number[][]} mat
 * @return {number}
 * ES6 Arrow notation for function definition
 */
const diagonalSum = (mat) => {

    let sum = 0

    // set two variables. i = 0 and j = the last row minus 1
    // we're basically closing in from the front and back here
    for (let i = 0, j = mat[i].length - 1; i < mat.length; i++, j--){ 

        // increment the sum by a ternary
        // if j and i are unequal, sum mat[i][i] and [i][j], otherwise just sum [i][i]
        sum += j !== i ? mat[i][i] + mat[i][j] : mat[i][i]
    }

    return sum
};