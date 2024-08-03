/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  console.log(str);
  str =str
       .split(' ')
       .join('');
  // console.log(str)
  let i = 0;
  let j = str.length - 1;

  while( i < j){
 
    if(str[i] == str[j]){
      i++;
      j--;
    }
    else{
      return false;
    }
  }
  return true;
}

console.log(isPalindrome('Able, was I ere I saw Elba!'))
console.log(isPalindrome('race car'))

module.exports = isPalindrome;
