/*
A phrase is a palindrome if, after converting all uppercase letters into
lowercase letters and removing all non-alphanumeric characters, it reads 
the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.


Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.


Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.


*/

const isPalindrome = function(s) {
    // input -- string
    // output -- boolean (true if palindrome, false if not)

    // remove all non-alphanumeric chars from input string
    // use 2 pointers - L at beginning of string, R at end
    // While L is <= R, check equality of each character at pointer
    // if string L is same as string R, increase L and decrease R, else we don't have a palindrome
    // if L === R, we've reached the middle of the string and it is a palindrome



    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let l = 0;
    let r = s.length - 1;

    while (l <= r) {
        if (s[l] !== s[r]) return false;
        if (s[l] === s[r]) {
            l++;
            r--;
        }
    }

    return true;
};