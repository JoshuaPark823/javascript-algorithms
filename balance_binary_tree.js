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
 * @return {boolean} Returns if the tree is height-balanced.
 */
const isBalanced = (root) => {

    /**
     * @param {TreeNode} node
     * @return {Number} Returns the maximum height of the subtrees
     */
    const maxHeight = (node) => {

        if (node == null) { 
            return 0;
        }

        let left = maxHeight(node.left);
        let right = maxHeight(node.right);

        // If the balancing property ever breaks, return -1, check both the left and right
        // subtrees each recursive call.
        if (left == -1 || right == -1 || Math.abs(right - left) > 1) {
            return -1;
        }

        return 1 + Math.max(left, right);
    };

    // If maxHeight(root) is never -1, means all subtres satisfy the property.
    return maxHeight(root) != -1;
};
