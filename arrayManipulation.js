// Task One 
function processArray(arr) {
  
  const processedArray = [];

  
  for (const num of arr) {
  
    if (num % 2 === 0) {
      // Square the even number
      processedArray.push(num * num);
    } else {
      // Triple the odd number
      processedArray.push(num * 3);
    }
  }

  return processedArray;
}

const originalArray = [1, 4, 3, 6, 7, 8];
const processedArray = processArray(originalArray);

console.log("Original Array:", originalArray);
console.log("Processed Array:", processedArray);