QuickSort is an efficient sorting algorihm that uses a divide and conquer approach to sort Element by using a pivot and partitioning the array around it, then recursively sorting the sub-arrays. it efficietly sorts the entire array.
This method typically performs well, making it a popular choice for sorting large datasets.

Quicksort Works as Follows:

Quicksort works by first checking the base case: if the low index is not less than the high index, the sub-array is already sorted. Then, it partitions the array by selecting a pivot element and reordering the array so that all elements with values less than the pivot come before it, and all elements with values greater than the pivot come after it, placing the pivot in its final position. Finally, it recursively applies these steps to the sub-arrays containing elements with smaller and larger values until the entire array is sorted.

Heres how it implemented in Typescript

function quickSort(arr, low, high) {
    if (low < high) {
        // Partition the array and get the pivot index
        const partitioned = partition(arr, low, high);

        // Recursively sort the elements before and after the pivot
        quickSort(arr, low, partitioned - 1);
        quickSort(arr, partitioned + 1, high);
    }
}

function partition(arr, low, high) {
    const pivot = arr[high]; // Choose the last element as the pivot
    let i = low - 1; // Index of the smaller element

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1; // Return the partition index
}

// Swap two elements in an array
function swap(arr, i, j) {
    const temp = arr[i]; // Store the first element in a temporary variable
    arr[i] = arr[j]; // Replace the first element with the second element
    arr[j] = temp; // Replace the second element with the first element stored in temp
}

// Example usage
const unsortedArray = [5, 3, 1, 8, 7, 4];
quickSort(unsortedArray, 0, unsortedArray.length - 1);
console.log(unsortedArray); // Output: [1, 3, 4, 5, 7, 8]

Step-by-Step Example on the Implementation:

1.  Initial Call:

    Array: [5, 3, 1, 8, 7, 4]
    low = 0, high = 5
    Pivot: 4 (last element)
    Partition the array: [3, 1, 4, 8, 7, 5]
    First Recursive Call on Left:

2.  Array: [3, 1]
    low = 0, high = 1
    Pivot: 1 (last element)
    Partition the array: [1, 3]
    Second Recursive Call on Right:

3.  Array: [8, 7, 5]
    low = 3, high = 5
    Pivot: 5 (last element)
    Partition the array: [4, 1, 3, 5, 7, 8]
    Subsequent Recursive Calls:

Apply the same logic recursively to the sub-arrays until the entire array is sorted.
The array is now fully sorted as [1, 3, 4, 5, 7, 8].
