// Factorialize the number
function factorialize(num) {
  var result=1;
  if (num === 0 || num === 1)
    return 1;
  while (1 < num) {
    result = result * num;
    num--;
  }
  return result;
}
factorialize(5);

// --- BEST ---
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  // This is it! Recursion!!
  return n * factorial(n - 1);
}
factorial(5)

// === END ====


// Check for Palindromes
function palindrome(str) {
  var checkStr = str.toLowerCase().replace(/[^0-9a-z]/gi, '')
  console.log('checkStr',checkStr)
  if(checkStr == checkStr.split("").reverse().join("")){
    return true;
  }
  return false;
}
palindrome("_eye");

// === END ====

// Find the Longest Word in a String
function findLongestWord(str) {
  return Math.max.apply(null,str.split(' ').map(a=>{return a.length}))
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// === END ====

//Title Case a Sentence
function titleCase(str) {
  var apk = str.toLowerCase().split(' ');
  var lol = apk.map(a=>{
    a = a.charAt(0).toUpperCase() + a.slice(1);
    return a;
  })
  return lol.join(' ');
}
titleCase("sHoRt AnD sToUt");

// === END ====


//Return Largest Numbers in Arrays
function largestOfFour(arr) {
  var largestArr=[];
  var lol = arr.map(a=>{
    largestArr.push( Math.max.apply(null,a) );
  })
  return largestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// === END ====

//Confirm the Ending
function confirmEnding(str, target) {
  return str.lastIndexOf(target) == (str.length - target.length)
}

confirmEnding("Bastian", "n");

// === END ====

//Repeat a string repeat a string
function repeatStringNumTimes(str, num) {
  if(num < 1)
    return '';
  var arr =new Array(num+1);
  return arr.join(str);
}
repeatStringNumTimes("abc", 3);
// === END ====


//Truncate a string
function truncateString(str, num) {
  // Clear out that junk in your trunk
  return (num >= str.length ? str : str.slice(0,(num<=3?num:num-3)) + '...');
}
truncateString("A-tisket a-tasket A green and yellow basket", 11);
// === END ====

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let result = []
  let times = Math.floor( arr.length / size );
  let rmd = arr.length % size;
  rmd? times++ : '';
  for(let i = 0; i < times; i++){
    result.push( arr.slice( i == 0 ? i : (size * i) , size * (i + 1) ) )
  }
  return result;
}
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)
// === END ====

//Slasher Flick
function slasher(arr, howMany) {
  if(howMany >= arr.length){
    return [];
  }
  arr.splice(0, howMany);
  return arr;
}
slasher([1, 2, 3], 3);
// === END ====

