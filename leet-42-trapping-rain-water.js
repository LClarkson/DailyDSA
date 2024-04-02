/*
Given n non-negative integers representing an elevation map where the width 
of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9
*/


const trap = function(height) {
    // input - ARRAY of heights
    // output - NUMBER of units of rain
    // strategy - two pointers


    // init 2 pointers, starting at l and r (l + 1)
    // if l has no height, no left wall yet, increment l and r 
    // if r is less than r, l is a wall and can hold water
        // increment r until it reaches a wall of AT LEAST equal height
    // if r is same height as l, no water can be held
        // increment l and r


};