// Create tree

class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        this.children.push(new Node(value));
        return this;
    }
}


// BFS - Use a Queue

/************************************************************

O(n) -- implement standard Array

    Enqueue -- array.push(value);
    Dequeue -- const value = array.shift(), return value

O(1) -- implement Object with pointers

*/

// O(n) BFS

const BFS = (root) => {

    // Array to store node values
    const result = [];

    // Create queue
    const queue = [root];

    // Create while loop to traverse binary search tree
    while (queue.length > 0) {

        // store current value in temporary variable
        const current = queue.shift();

        // check if current node is null, if it is, we've reached the end of the branch
        if (current === null) continue; // break current iteration

        // push current node value to result array
        result.push(current.value);

        // push any children of current node into result array
        for (const child of current.children) {
            queue.push(child);
        }

    }

    // Return final array results
    return result;
}



// DFS -- much more straight forward, use recursion

// Create Node Class

const TreeNode = (value, left, right) => {
    this.value = value;
    this.left = left;
    this.right = right;
}




var searchBST = function(root, searchValue) {

    // basecases
    if (!root) return null; // if we reached the end of a subtree return null, the search value doesn't exist in this subtree
    if (root.value === searchValue) return root; // if the current root value equals the searchValue, we've found our search value, return the node


    /* 
    recursive search
    the logical OR operater works as follows:
    first the left side of the operater is called recursively
    IF the value is found on the left side, value is returned and right side is never called
    IF the entire left side is searched and returns null, program moves to the right side of the operator
    IF the value is found on the right side, value is returned, if not, null is returned
    */
    return searchBST(root.left, searchValue) || searchBST(root.right, searchValue);
    
};