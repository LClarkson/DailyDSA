/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
*/

const groupAnagrams = function(strs) {
    // input - string array
    // output - array of grouped string arrays

    // create object to hold key value pairs
    // keys will be the sorted strings 
    // values will be an array of those strings that match the sorted string and appear in the input array
    let sorted = {};

    for (const s of strs) {
        // define key
        const key = s.split('').sort().join('');
        
        // check if key exists in sorted
        // if the key exists, push the current string s into the value array
        if (sorted[key]) {
            sorted[key].push(s);
        } else {
            // if the key doesnt exist, create it and set value to array pushing in string
            sorted[key] = [s];
        }
    }

    // return an array of object values
    return Object.values(sorted);

};

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);