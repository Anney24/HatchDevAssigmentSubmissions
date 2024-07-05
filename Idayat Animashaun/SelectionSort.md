Definition

Selection sort Algorithm repeatedly selects the smallest element from the unsorted portion of the array and swaps it with the element at the current position. This process is repeated until the entire array is sorted.

Here's a pseudo Code 
function selectionSort(arr:number[]):number[]{
    const n = arr.length
    
    //Loop through each element of the array except the last one.
    for (let i= 0; i < n -1; i ++){
        let minIndex = i;//Assume the current index is the smallest.

        //Loop through the remaining elements to find the actual smallest element.

        for (let j= i + 1; j < n; j++){
            if (arr[j] < arr[minIndex]){
                minIndex = j //Update minIndex if a smaller element is found
            }
        }

        //Swap the smallest element found with the element at the current index.
        if(minIndex != i){
            swap(arr, i, minIndex)
        }
    }
    return arr
}

//Example Usage:

const unsortedArray = [7,2,8,5]
const sortedArray = selectionSort(unsortedArray)
console.log(sortedArray)

This code iterates over the array, selects the minimum element from the unsorted part, and swaps it with the first unsorted element,ensuring that with each iteration, the sorted portion grows.