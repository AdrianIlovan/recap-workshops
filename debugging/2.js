/*
This function should return the value of the largest number in the given array. 
Can you fix the bug in this function
The function was actually working good
*/

function getLargestNum(arr) {
    let largestNum = 0;
    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] > largestNum) {
        largestNum += arr[i];
      }
    }
    return largestNum;
  }
  let arr = [ 10,20,30,40,50];

  getLargestNum(arr)
  debugger
  //I need some explaining on this one
  //why largestNum += arr[i]; now is 70? why 70?