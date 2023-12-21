function isPalindrome(word) {
  // Write your algorithm here
  firstSplitingWord =word.split('');
  reverseWord = firstSplitingWord.reverse().join('')
 return word === reverseWord ;
}

/* 
  Add your pseudocode here
  1- spliting all letter by space
  2- then reverse the order of letters
  3- join it 
  4- compare between the original word and reverse word 
*/

/*
  Add written explanation of your solution here
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
