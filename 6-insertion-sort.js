const array = [2, 3, -2, 6, 2, 9, 11, 100, 4];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    if(array[i] < array[i - 1]){
        let key = array[i];
        let ind = i - 1;
        array[i] = array[ind];
        while (key < array[ind]) {
          array[ind + 1] = array[ind];
          ind--;
        }
        array[ind + 1] = key;
    }
  }
  return array;
}
console.log(insertionSort(array));
