function reverse(word){
  //'abc' => 'cba'
  //  const wordArray= word.split("")
  //  const reversedWordArray= wordArray.reverse()
  //  const reversedWord= reversedWordArray.join("")
  //  return reversedWord;
   return word.split("").reverse().join("");
}


function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord=reverse(word)
   return word === reversedWord
    
   }
  //     return true
  //  else
  //    return false   
//}

/**  1.Rewrite problem in your own words
 make a function that returns true if a word is a palindrom and  false if not.ie if the reversed word is same with the original word, I should return true */


/* 
  Add your pseudocode here
  ie if the reversed word is same with the original word, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
      return true
   else
     return false   
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Exoecting:true")
  console.log("=>", isPalindrome("eye"));

  console.log("Exoecting:false")
  console.log("=>", isPalindrome("motto"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
