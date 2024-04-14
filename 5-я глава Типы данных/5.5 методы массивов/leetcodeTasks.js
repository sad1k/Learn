
// Given two strings s and t, determine if they are isomorphic.

// Two strings s and t are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
 

// Constraints:

// 1 <= s.length <= 5 * 104
// t.length == s.length
// s and t consist of any valid ascii character.


var isIsomorphic = function(s, t) {
    if(s.length != t.length){
        return false
    }
    const map1 = {}
    const map2 = {}
    for(let i = 0; i< s.length; i++){
        if(s[i] in map1 && map1[s[i]] !== t[i] || t[i] in map2 && map2[t[i]] !== s[i]){  
            return false
        }
        map1[s[i]] = t[i]
        map2[t[i]] = s[i]
    }
    return true
   
};


// A string is a valid parentheses string (denoted VPS) if it meets one of the following:

// It is an empty string "", or a single character not equal to "(" or ")",
// It can be written as AB (A concatenated with B), where A and B are VPS's, or
// It can be written as (A), where A is a VPS.
// We can similarly define the nesting depth depth(S) of any VPS S as follows:

// depth("") = 0
// depth(C) = 0, where C is a string with a single character not equal to "(" or ")".
// depth(A + B) = max(depth(A), depth(B)), where A and B are VPS's.
// depth("(" + A + ")") = 1 + depth(A), where A is a VPS.
// For example, "", "()()", and "()(()())" are VPS's (with nesting depths 0, 1, and 2), and ")(" and "(()" are not VPS's.

// Given a VPS represented as string s, return the nesting depth of s.

 

// Example 1:

// Input: s = "(1+(2*3)+((8)/4))+1"
// Output: 3
// Explanation: Digit 8 is inside of 3 nested parentheses in the string.
// Example 2:

// Input: s = "(1)+((2))+(((3)))"
// Output: 3
 

// Constraints:

// 1 <= s.length <= 100
// s consists of digits 0-9 and characters '+', '-', '*', '/', '(', and ')'.
// It is guaranteed that parentheses expression s is a VPS.

var maxDepth = function(s) {
    let a=[];
     let n=0;
     for(let i=0;i<s.length;i++){
         if(s[i]==='('){
             a.push(s[i]);
             n=n>a.length?n:a.length;
         }
         else if(s[i]===')'){
             a.pop();
         }
     }
     return n;
 
 };



//  Given a string s of lower and upper case English letters.

//  A good string is a string which doesn't have two adjacent characters s[i] and s[i + 1] where:
 
//  0 <= i <= s.length - 2
//  s[i] is a lower-case letter and s[i + 1] is the same letter but in upper-case or vice-versa.
//  To make the string good, you can choose two adjacent characters that make the string bad and remove them. You can keep doing this until the string becomes good.
 
//  Return the string after making it good. The answer is guaranteed to be unique under the given constraints.
 
//  Notice that an empty string is also good.
 
  
 
//  Example 1:
 
//  Input: s = "leEeetcode"
//  Output: "leetcode"
//  Explanation: In the first step, either you choose i = 1 or i = 2, both will result "leEeetcode" to be reduced to "leetcode".
//  Example 2:
 
//  Input: s = "abBAcC"
//  Output: ""
//  Explanation: We have many possible scenarios, and all lead to the same answer. For example:
//  "abBAcC" --> "aAcC" --> "cC" --> ""
//  "abBAcC" --> "abBA" --> "aA" --> ""
//  Example 3:
 
//  Input: s = "s"
//  Output: "s"

 /**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    if(s == ''){
        return ''
    }
    let res = s
    let stack = []
    for(let i = 0; i < s.length; i++){
        if(stack[stack.length - 1]?.toLowerCase() == res[i].toLowerCase() && stack[stack.length - 1] !== res[i]){
            stack.pop(s[i])
        }else{
            stack.push(s[i])
        }
    }
    return stack.join('')

};


// The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

// The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

// If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
// Otherwise, they will leave it and go to the queue's end.
// This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

// You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

 

// Example 1:

// Input: students = [1,1,0,0], sandwiches = [0,1,0,1]
// Output: 0 
// Explanation:
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
// - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
// - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
// - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
// - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
// - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
// Hence all students are able to eat.
// Example 2:

// Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
// Output: 3
 

// Constraints:

// 1 <= students.length, sandwiches.length <= 100
// students.length == sandwiches.length
// sandwiches[i] is 0 or 1.
// students[i] is 0 or 1.


/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let i = 0;
    let j = 0
    let k = 0
    while(k != students.length){
        if(students[0] == sandwiches[0]){
            students.shift()
            sandwiches.shift()
            k = 0
        }else{
            students.push(students[0])
            students.shift()
            k++
        }

    }
    return students.length
};