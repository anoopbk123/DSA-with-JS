//Binary Search
//Time complexity-O(log n)
//Use divide and conquer approach
//Applied to the sorted array
//Reduces the search space in half with each comparison

const array = [1, 2, 3, 4, 5, 6];
const target = 6;
console.log(binarySearch(array, target));

function binarySearch (array, target){
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if (array[mid] === target){
            return mid;
        }
        else{
            if(array[mid] > target){
                right = mid - 1;
            }
            else if(array[mid] < target){
                left = mid + 1;
            }
        }
    }
    return -1;
}
