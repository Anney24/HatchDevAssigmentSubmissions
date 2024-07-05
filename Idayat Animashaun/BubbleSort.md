Definition:

BubbleSort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. this process is repeated until the array is sorted.Although it is not the the most efficient sorting algorithm for large dataset.

Bubble sort works as follows:

1. Initialize: Get the array length.
2. Outer Loop: Loop through the array multiple times. Each pass moves the next largest element to its correct position.
3. Inner Loop: Compare each pair of adjacent elements.
- If the current element is greater than the next, swap them.
- Continue until the largest unsorted element bubbles up to its correct position.
- Repeat: Continue until no more swaps are needed, indicating the array is sorted.

Heres the pseudo Code:

function bubbleSort(arr:number[]): number[]{
    const n = arr.length;

    //Loop through the entire array
    for(let i = 0; i < n-1; i++){
        //Loop through the array up to the last unsorted element.
        for(let j=0; j < n-i-j; j++){
            <!--if the current element is greater than the next element, swap them -->
            
            if(arr[j] > arr[j + 1]){
                swap(arr, j, j+ 1);
            }

        }
    }
    return arr //Return the sorted array
}

//Example usage:
const unsortedArray = [7,2,8,5]
const sortedArray = bubbleSort(unsortedArray)
console.log(sortedArray)


A step by step Example on the implementation:

1. First pass when i= 0; j= 4-0-1= 3: 
- when j = 0; compare 7 and 2; swap them to get [2,7,8,5] then increment j plus one
- when j = 1; compare 7 and 8; we dont swap because it doesnt satisfy the condition.
-when j= 2; compare 8 and 5; swap them to get [2,7,5,8]

2. Second pass when i= 1 j= 4-1-1= 2:
- when j = 1; compare 7 and 5; swap them to get [2,5,7,8] then increment j plus one
- when j = 2; compare 7 and 8; we dont swap because it doesnt satisfy the condition.

3. Third pass when i = 2; j= 4-2-1= 1;
- when j = 0; compare 2 and 5; we dont swap because it doesnt satisfy the condition. 
4. Final Sorted Array

when i = 3; j= 4-3-1= 0;
we stop here cus 0 is less than j= 4-3-1=0.
The array is now fully sorted as [2,5,7,8]

