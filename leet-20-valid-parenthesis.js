/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.

*/


const isValid = (s) => {
  // input - string
  // output - boolean

    const stack = [];
    const bracketDictionary = {
        '(': ')',
        '{': '}',
        '[': ']',
    }
    // loop through input string
    for (let i = 0; i < s.length; i++) {

        // if first element is a closing bracket, return false
        if (s[0] === ')' || s[0] === '}' || s[0] === ']') return false;

        // if current element is an openeing bracket, push to stack for comparison
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
        } else

            // check closing paren, pop last paren off stack and see if it is the mirror of current element
            if (bracketDictionary[stack.pop()] !== s[i]) {
                return false;
            }
    };

    return stack.length === 0;
};

console.log(isValid('{[{}]}'));

