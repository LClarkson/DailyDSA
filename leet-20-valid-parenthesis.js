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


const isValid = (string) => {
  // input - string
  // output - boolean

  // create a stack to push parens into
  let stack = [];

  // create hashmap to compare parens
  const map = {
    ")" : "(",
    "]" : "[",
    "}" : "{",
  };

  // loop through string, compare current paren with any paren in stack
  for (const char of string) {
    // check if current index is a closing bracket
    const closingBracket = (char in map);
    if (!closingBracket) {
        stack.push(char);
        continue; // stop current iteration and move to next iteration
    }

    const isEqual = stack[stack.length - 1] === map[char];
    if (isEqual) {
        stack.pop(); 
        continue;
    }

    return false;
  }

  return stack.length === 0;
};

console.log(isValid(')('));

