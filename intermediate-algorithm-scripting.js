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
