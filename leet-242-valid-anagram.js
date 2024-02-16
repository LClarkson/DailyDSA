/********************************************************************************************************
* Given two strings s and t, return true if t is an anagram of s, and false otherwise.                  *
*                                                                                                       * 
* An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,       *
* typically using all the original letters exactly once.                                                *
*                                                                                                       *
* Examples:                                                                                             *
*                                                                                                       *
* Input: s = "anagram", t = "nagaram"                                                                   *
* Output: true                                                                                          *
*                                                                                                       *
* Input: s = "rat", t = "car"                                                                           *
* Output: false                                                                                         *
*********************************************************************************************************
*/


var isAnagram = function(s, t) {
    
    //edge case - if string lengths are not equal, it's not an anagram
    if (s.length !== t.length) return false;

    //sort input strings
    const sSort = s.split('').sort().join('');
    const tSort = t.split('').sort().join('');

    // check equality
    return sSort === tSort;
    
};

console.log(isAnagram('rat','tar'));
console.log(isAnagram('ac','bb'));