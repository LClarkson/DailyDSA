/*
Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
find two numbers such that they add up to a specific target number. Let these two numbers be
numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2,
added by one as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution.
You may not use the same element twice.

Your solution must use only constant extra space.

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]
Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {

    // intput -- sorted array of nums
    // output -- array of indices

    // **IMPORTANT** return indexes are not zero based, start at 1
    // input array is sorted, use two pointers

    // init left pointer to start of array
    // init right pointer to end of array
    // while left < right, sum elements and check against target
    // if sum is too large, decrease right pointer and recheck
    // if sum is too small, increase left pointer and recheck
    // if solution is found, return true, else return false

    let l = 0;
    let r = numbers.length - 1;

    while (l < r) {
        if (numbers[l] + numbers[r] === target) return [l + 1, r + 1];
        if (numbers[l] + numbers[r] > target) r--;
        if (numbers[l] + numbers[r] < target) l++;
    }
    
};

console.log(twoSum([2,3,4,7,11,15,16,20], 26));