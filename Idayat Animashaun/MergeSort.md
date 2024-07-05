Merge sort is a highly efficient, stable, and comparison-based sorting algorithm that uses a divide and conquer approach. by recursively splitting the array into smaller sub-arrays and then merging them back together in a sorted order, it effeciently sorts the entire array, MergeSort has a time complexity of 0(n log n) and widely used for itys performance and simplicity.

Merge Sort Works as Follows:

1.  Divide: Split the array into two halves.
2.  Recursion: Recursively apply the merge sort to each half until the sub-arrays have only one element.
3.  Merge: Merge the sorted sub-arrays to form a sorted array.


Here is the complete code with detailed comments:

/*
    Merge two subarrays of arr.
    First subarray is arr[left....mid]
    Second subarray is arr[mid+1...right]
*/

function merge(arr:number[],left:number,mid:number,right:number): void{

    const n1 = mid - left + 1; //Size of the first subarray

    const n2 = right - mid; //Size of the second subarray

    //Create temporary arrays
    const L = new Array(n1);
    const R = new Array(n2);

    //Copy data to temporary arrays L[] and R[]
    
    for(let i= 0; i < n1;i++){
        L[i] = arr[left + 1];
    }
        
    for(let j=0; j < n2; i++){
        R[j] = arr[mid + 1 + j]
    }

    //Merge the temporary arrays back into arr[left...right]

    let i = 0, j = 0, k = left;

    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[k] = L[i];
            i++;
        }
        else{
            arr[k] = R[j];
            j++;
        }
        k++
    }
    //Copy the remaining elements of L[], if there are any

    while(i < n1){
        arr[k] = L[i];
        i++;
        k++;
    }

    //Copy the remaining elements of R[], if there are any

    while(j < n2){
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr:number[], left:number, right:number):void{
    if(left < right){
        const mid = Math.floor((left + right) / 2);

        //Recursively sort the first and second halves
        mergeSort(arr,left,mid);
        mergeSort(arr, mid + 1, right)

        //Merge the sorted halves
        merge(arr, left, mid, right)
    }
}

//Example usage:
const unsortedArray = [5,3,1,8,7,4]
mergeSort(unsortedArray,0,unsortedArray.length - 1);
console.log(unsortedArray)

e.log(unsortedArray); // Output: [1, 3, 4, 5, 7, 8]

Step-by-Step Example on the Implementation:

Initial Call:

Array: [5, 3, 1, 8, 7, 4]
left = 0, right = 5
mid = 2 (calculated as Math.floor((0 + 5) / 2))

1. First Recursive Call on Left Half:

    Array: [5, 3, 1]
    left = 0, right = 2
    mid = 1 (calculated as Math.floor((0 + 2) / 2))

2. Second Recursive Call on Left Half of First Half:

    Array: [5, 3]
    left = 0, right = 1
    mid = 0 (calculated as Math.floor((0 + 1) / 2))

3.  Third Recursive Call on Sub-array [5]:

    Array: [5]
    left = 0, right = 0
    Base case reached, return without changes.

4.  Fourth Recursive Call on Sub-array [3]:

    Array: [3]
    left = 1, right = 1
    Base case reached, return without changes.
    Merge Step for [5] and [3]:

    Merge arrays [5] and [3] to get [3, 5]

5.  Fifth Recursive Call on Right Half of First Half:

    Array: [1]
    left = 2, right = 2
    Base case reached, return without changes.
    Merge Step for [3, 5] and [1]:

    Merge arrays [3, 5] and [1] to get [1, 3, 5]

6.  First Recursive Call on Right Half:

    Array: [8, 7, 4]
    left = 3, right = 5
    mid = 4 (calculated as Math.floor((3 + 5) / 2))

7.  Sixth Recursive Call on Left Half of Right Half:

    Array: [8, 7]
    left = 3, right = 4
    mid = 3 (calculated as Math.floor((3 + 4) / 2))

8.  Seventh Recursive Call on Sub-array [8]:

    Array: [8]
    left = 3, right = 3
    Base case reached, return without changes.

8.  Eighth Recursive Call on Sub-array [7]:

    Array: [7]
    left = 4, right = 4
    Base case reached, return without changes.
    Merge Step for [8] and [7]:

    Merge arrays [8] and [7] to get [7, 8]

9.  Ninth Recursive Call on Right Half of Right Half:

    Array: [4]
    left = 5, right = 5
    Base case reached, return without changes.
    Merge Step for [7, 8] and [4]:

    Merge arrays [7, 8] and [4] to get [4, 7, 8]

10  Final Merge Step for [1, 3, 5] and [4, 7, 8]:

    Merge arrays [1, 3, 5] and [4, 7, 8] to get [1, 3, 4, 5, 7, 8]
The array is now fully sorted as [1, 3, 4, 5, 7, 8].








