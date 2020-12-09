/**
 * Given a binary tree, determine if it is height-balanced.
 * For this problem, a height-balanced binary tree is defined as:
 * a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 * 
 * Example:
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * 
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 */

/**
 * @param {*} val 
 * @param {TreeNode} left 
 * @param {TreeNode} right 
 */
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = (root) => {

    // Define a recursive function that calculates the minimum depth
    const minDepth = (node) => {
        if(typeof node == null) {
            return 0;
        }

        // return 1 + the minimum between the left and right subtrees
        return 1 + Math.min(minDepth(node.left), minDepth(node.right));
    };

    // Define a recursive function that calculates the maximum depth
    const maxDepth = (node) => {
        if(typeof node == null) {
            return 0;
        }

        return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
    }

    // To check if the tree is balanced, compare the minDepth with the maxDepth of the node

    if (typeof root == null) {
        return undefined;
    }

    // Check balancing property
    return maxDepth(root) - minDepth(root) <= 1 ? true : false;
};