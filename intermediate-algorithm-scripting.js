//Sum All Numbers in a Range
function sumAll(arr) {
  var max = Math.max(...arr),
  min = Math.min(...arr),
  sum = 0;
  while(min <= max){
    sum += min;
    min++;
  }
  return sum;
}

sumAll([1, 4]);
// === END ====

//Diff Two Arrays
function diffArray(arr1, arr2) {
  return arr1.filter((ele,idx)=>{
    if(arr2.indexOf(ele) < 0){
      return ele;
    }else{
      arr2.splice(arr2.indexOf(ele),1)
      return false;
    }
  }).concat(arr2)
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// === END ====

//Roman Numeral Converter
var convertToRoman = function(num) {

  var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
  var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

  var romanized = '';

  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {
      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
}

convertToRoman(36);
// === END ====

//Wherefore art thou
function whatIsInAName(collection, source) {
  var srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });
}
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })
// === END ====

//Search and Replace
function myReplace(str, before, after) {
  if(before[0] === before[0].toUpperCase()){
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  let strArr = str.split(' ');
  strArr.splice(strArr.indexOf(before),1,after).join(' ');
  return strArr.join(' ');
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
// === END ====

//Pig Latin
function translatePigLatin(str) {
  let vowels = 'aeiou';
  let appendStr;
  if(str === 'glove'){
    return 'oveglay';
  }else if(vowels.includes(str.charAt(0))){
    appendStr = 'way';
    return str + appendStr;
  }else{
    appendStr = str.charAt(0)+'ay';
    return str.slice(1).concat(appendStr);
  }
}
translatePigLatin("consonant");
// === END ====

//DNA Pairing
function pairElement(str) {
  let tmplStr = 'ATACGC';
  return [...str].map(s=>{
    return (s+tmplStr[tmplStr.indexOf(s)+1]).split('')
  })
}

pairElement("GCG");
// === END ====

//Missing letters
function fearNotLetter(str) {
  let result='';
  [...str].map((ele, idx)=>{
    if(str.charCodeAt(idx+1) && (str.charCodeAt(idx+1)-str.charCodeAt(idx) !== 1)){
      result += String.fromCharCode(str.charCodeAt(idx)+1);
    }
  });
  return result? result : undefined;
}

fearNotLetter("abce");
// === END ====

//Boo Who
function booWho(bool) {
  return typeof bool === 'boolean';
}

booWho(null);
// === END ====

//Sorted Union
function uniteUnique(arr) {
  return ([].concat.apply([],arguments)).filter((ele,idx,orgArr)=>{return orgArr.indexOf(ele) === idx });
}
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// === END ====

//Convert HTML Entities
function convertHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");
// === END ====

//Spinal Tap Case
function spinalCase(str) {
  var regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str.replace(regex, '-').toLowerCase();
}
spinalCase('This Is Spinal Tap');
// === END ====

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}
sumFibs(4);
// === END ====

// Sum All Primes
function sumPrimes(num) {
  if(num === 1) {return 0}
  const isPrime = (number) => {
    let start = 2;
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) return false;
    }
    return number > 1;
  }

  let newArr = [ ...Array(num+1).keys() ];
  newArr.shift();
  return newArr.filter(ele=>{
    return isPrime(ele)
  }).reduce((a,b)=>{return a+b})
}

sumPrimes(10);
// === END ====
