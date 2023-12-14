//best case, avg case O(n log n)
//worst case O(n^2) extremly rare 
//select a pivote
//create two arrays left and right
//push elements lessthan pivote to left array and grater to right array
function quickSort(array) {
  //return array if array have only one element
  if (array.length < 2) return array;
  const left = [];
  const right = [];
  let pivot = array[array.length - 1]
  for(let i = 0; i < array.length; i++){
    if(pivot < array[i]){
        right.push(array[i]);
    }
    else{
        left.push(array[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}
const array = [1, 5, 3, 8, 9, 6, 2];
console.log('sorted array ', quickSort(array));
console.log('array ', array);

