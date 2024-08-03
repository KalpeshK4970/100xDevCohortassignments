/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
 const map1 = new Map();
 const map2 = new Map();

 //convert the strings to lowercase 
 str1 = str1.toLowerCase();
 str2 = str2.toLowerCase();

 for(const char of str1){
  map1.set(char, (map1.get(char) || 0) + 1);
 }

 for(const char of str2){
  map2.set(char, (map2.get(char) || 0) + 1);
 }

// remove the blank spaces
 map1.delete(' ');
 map2.delete(' ');

 for(const char of str1){
   if(map1.get(char) != map2.get(char)){
    return false;
   }
 }

 if(map1.size != map2.size){
  return false; 
 }
 return true;
}

console.log(isAnagram("Debit card","Bad  credit"))
module.exports = isAnagram;
