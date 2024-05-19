function processArray(arr) {
  const processedArr = [];

  for (const num of arr) {
    if (num % 2 === 0) {
      processedArr.push(num * num);
    } else {
      processedArr.push(num * 3);
    }
  }

  return processedArr;
}

function formatArrayStrings(strArr, numArr) {
 
  const formattedArr = [];

  for (let i = 0; i < strArr.length; i++) {
    const string = strArr[i];
    const number = numArr[i];

    if (number % 2 === 0) {
      formattedArr.push(string.toUpperCase());
    } else {
      formattedArr.push(string.toLowerCase());
    }
  }

  return formattedArr;
}

const strings = ["Hello", "world", "how", "are", "you?"];
const numbers = processArray([1, 4, 5, 2, 8]);
const formattedStrings = formatArrayStrings(strings, numbers);
console.log(formattedStrings); 
