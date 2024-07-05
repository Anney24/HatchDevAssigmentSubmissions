Insertion Sort

Definition:
Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has the advantage of being simple, intuitive, and efficient for small datasets or mostly sorted arrays.

Insertion Sort Works as Follows:

1.  Initialize: Start with the first element, considering it as a sorted sub-array.
2.  Outer Loop: Iterate from the second element to the last element in the array.
3.  Inner Loop: For each element, compare it with the elements in the sorted sub-array.
If the element is smaller than its predecessor, continue to compare it with the elements before, moving each element one position to the right until the correct position is found.
Insert the current element into its correct position in the sorted sub-array.


Heres a Pseudo code

const insertionSort = (arr:number[]): number[]=>{
    const n= arr.length;

    //iterate through the array
    for(let i= 1; i< n; i++){
        //current element to be compared
        const current = arr[i];
        let j = i -1;

        //Move element of arr[0... i-1], that are greater than current,
        //to one position ahead of their current position.
        while (j >= 0 && arr[j] > current){
            arr[j + 1] = arr[j]
            j--
        }
        //Place the current element at its correct position
        arr[j + 1] = current;
    }
    return arr; //Returned the stored array
};
Example usage:
const unsortedArray =[5,3,1,8,7,4];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray)

Step-by-Step Example on the Implementation:

Initial Array:[5, 3, 1, 8, 7, 4]

1.  First Pass (i = 1):

    Current: 3
    Compare with 5, move 5 to the right
    Insert 3 at the start: [3, 5, 1, 8, 7, 4]

2.  Second Pass (i = 2):

    Current: 1
    Compare with 5 and 3, move both to the right
    Insert 1 at the start: [1, 3, 5, 8, 7, 4]

3.  Third Pass (i = 3):

    Current: 8
    No movement needed
    [1, 3, 5, 8, 7, 4]
    
4.    Fourth Pass (i = 4):

    Current: 7
    Compare with 8, move 8 to the right
    Insert 7 before 8: [1, 3, 5, 7, 8, 4]
    
5.  Fifth Pass (i = 5):

    Current: 4
    Compare with 8, 7, 5, move all to the right
    Insert 4 before 5: [1, 3, 4, 5, 7, 8]

The array is now fully sorted as [1, 3, 4, 5, 7, 8].