/**
 * Reverse a singly linked list.
 * 
 * Example:
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {

    let curr = head; // set the head as the current
    let prev = next = null; // assign previous and next pointers to null initially
        
    // while the current val isn't null
    while(curr) {

        // assign next to hold the current node's next value
        next = curr.next; 

        // now that we have somewhere else to hold curr.next, we can point it to the previous
        curr.next = prev; 

        // update prev to hold the curr (we'll need to point to it next iteration)
        prev = curr;

        // get the next val we held in the first step and set it as our current node
        curr = next;
    }

    return prev;
};

