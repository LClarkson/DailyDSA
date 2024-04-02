/*
You are given an integer array height of length n. There are n vertical lines drawn
such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container,
such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
In this case, the max area of water (blue section) the container can contain is 49.

Example 2:
Input: height = [1,1]
Output: 1


*/

/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {

    // looking for area of rectangle

    // init variable to hold max value seen
    // use two pointers -- L at beginning, R at end
    // compute area of current container
        // compare heights of L and R, smaller is height of container
        // volume of container is height * distance between pointers
        // store value in max variable
        // shift smaller pointer 
        // if L is smaller, shift right
        // if R is smaller, shift left
        // re compute and compare to current max
        // If greater, replace max value, if smaller, move on


        let max = 0;
        let l = 0;
        let r = height.length - 1;
    
    
        while (l < r) {
    
            let containerHeight = Math.min(height[l], height[r]);
            let width = r - l;
            let currentContainer = containerHeight * width;
            max = Math.max(max, currentContainer);
            if (height[l] < height[r]) {
                l++;
            } else {
                r--;
            }
        }

        return max;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));