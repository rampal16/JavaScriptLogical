// Merge two sorted arrays without creating a new array.

const mergeTwoSortedArray = (a1, a2) => {
    let i =0;
    let j= 0;
    
    while(j < a2.length) {
        if(i < a1.length && a1[i] <= a2[j]) {
            i++;
        } else {
            a1.splice(i, 0, a2[j]);
            i++;
            j++;
        }
    }
}


const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8]

mergeTwoSortedArray(arr1, arr2);
console.log(arr1)
