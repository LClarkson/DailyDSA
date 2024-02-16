/*
Given an integer array nums and an integer k, return the k most frequent elements.
You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    // sort input array

    // create map of nums, with key being unique num and value being number of occurences
    const numsMap = {};
    for (const num of nums) {
        if (!numsMap[num]) {
            numsMap[num] = 1;
        } else {
            numsMap[num] = numsMap[num] + 1;
        }
    } 

    // sort map into most frequent nums seen, from most to least
    const sortedMap = Object.entries(numsMap).sort((a,b) => b[1] - a[1]);

    // create array of top k seen numbers
    const topK = [];
    for (let i = 0; i < k; i++) {
        topK.push(sortedMap[i][0]);
    }
    
    return topK;
    

};

topKFrequent([4,1,-1,2,-1,2,3], 2);