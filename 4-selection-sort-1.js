//O(n^2) in the worst, average, and best cases
const array = [2, 3, -2, 6, 2, 9, 11, 100, 4];
function selectionSort(){
    for(let i = 0; i < array.length -1; i++){
        for(let j = i + 1; j < array.length; j++ ){
            if(array[i] > array[j]){
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}
selectionSort();
console.log(array);