//divide and conqure
//O(n log n)
//divide the array into two at its middle repeate until length of the array is one
//compare first elements of array and push it to the new sorted array;
const array = [5, 4, 6, 2, 1];
console.log(`sorted array ${mergeSort(array)}`);
console.log(`array ${array}`);
function mergeSort(array) {
  if (array.length < 2) return array;
  let mid = Math.floor(array.length - 1);
  const leftArray = array.slice(0, mid);
  const rightArray = array.slice(mid);
  return merge(mergeSort(leftArray), mergeSort(rightArray));
}

function merge(leftArray, rightArray) {
  const sortedArray = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) 
      sortedArray.push(leftArray.shift());
    else 
      sortedArray.push(rightArray.shift());
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

