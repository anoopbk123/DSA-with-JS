// O(n^2) in the worst and average cases, O(n) in the best case 
const arr = [2, 3, -2, 6, 2, 9, 11, 100, 4];
console.log(bubbleSort(arr));

function bubbleSort(arr) {
  const array = [...arr];
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return array;
}
