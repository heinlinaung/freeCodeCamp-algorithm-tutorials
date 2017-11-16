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


