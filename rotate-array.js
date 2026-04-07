const rotateArray = (arr, position) => {
   position = position % arr.length; // handle when position > array length
   
   for(let i=0; i<position; i++) {
       arr.unshift(arr.pop());
   }
}

const a1 = [1,2,3,4,5,6,7,8,9]
rotateArray(a1, 2);
console.log(a1)
