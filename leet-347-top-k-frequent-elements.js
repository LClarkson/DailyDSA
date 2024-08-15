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
const topKFrequent = function (nums, k) {
  // input - array of numbers, number
  // output - array of numbers

  // IF there is only 1 number in the array, that is the most frequent element
  // IF there are no numbers in the array, return 'no elements in array'

  // create a map to hold numbers seen

  // iterate through input array
  // IF current element is not in map, add element to map as a key and set its value to 1
  // IF current element is already in map, increment its key by 1

  // after iteration we should have: {1:3, 2:2, 3:1}

  // create a new array with elements sorted by Object entries in decreasing order
  // iterate through new array and push first k elements (index 0) to output array
  // return output array

  if (nums.length === 0) return "no elements in array";
  if (nums.length === 1) return [nums[0]];

  const map = {};

  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    } else {
      map[nums[i]] += 1;
    }
  }

  const sorted = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .splice(0, k);

  const output = [];

  for (let i = 0; i < k; i++) {
    output.push(parseInt(sorted[i][0]));
  }

  return output;
};

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
