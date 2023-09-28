function isPalindrome(word) {
  // Write your algorithm here
  let len = word.length
  let mid = Math.floor(len/2);

    for ( let i = 0; i < mid; i++ ) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }

    return true;
} 

/* 
- Calculate the length of the input word and store it in len.
- Calculate the middle index of the word and store it in mid.
- Iterate through the characters of the word from 0 to mid - 1.
- Compare the character at index i with the character at index len - 1 - i.
- If any characters do not match, return false, indicating that the word is not a palindrome.
- If all characters match, return true, indicating that the word is a palindrome.
*/

/*
First, it finds the word's length and the middle point.
Then, it compares the letters from the start and the end at the same time.
If any pair of letters doesn't match, the word isn't a palindrome, so we know it's not one.
But if all pairs of letters match, the word is a palindrome, so we're sure it's one.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;