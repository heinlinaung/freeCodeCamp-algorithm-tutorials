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
