/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
You must write an algorithm that runs in O(n) time.

Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
*/

// note we added a default parameter maxScore
const longestConsecutive = function(nums, maxScore = 0) {
    
    // convert nums to Set, because it's faster to check Set HAS instead of Array INCLUDES
    const numSet = new Set(nums);       
    
    // loop through Set
    for (const num of numSet) { 

        // subtract 1 from current num
        const prevNum = num - 1; 

        // if there is 1 number directly below current num, it is part of a consecutive sequence
        if (numSet.has(prevNum)) continue; 

        // set variable currNum = current iteration, variable score = 1
        let [ currNum, score ] = [ num, 1 ]; 

        // is it a streak? check if set ALSO include a num directly above currNum
        const isStreak = () => numSet.has(currNum + 1) 

        // while isStreak returns true, increment currNum and score
        while (isStreak()) {             
            currNum++;
            score++;
        }

        maxScore = Math.max(maxScore, score); 
    }

    return maxScore;

};

const nums = [100,4,200,1,3,2];

longestConsecutive(nums);  //[1,2,3,4,100,200,201,202,203,204,205]
