//Linear Search
//Time complexity - O(n). where n = number of inputs;
const array = [43, 44, 1, 6, 3, 7];
const target = 2;
console.log(linearSearch(array, target));

function linearSearch(array, target){
    for(let i = 0; i < array.length; i++){
        if(array[i] === target){
            return `${target} found at ${i + 1}th position`;
        }
    }
    return `${target} is not in the array`;
}