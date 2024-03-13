const mixArray = [1, 9, -3, -5, 10, 3, 4, -4];
// mixArray.sort((a, b) => a - b);
// console.log(mixArray);
function sortedArray(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], (arr[i + 1] = arr[i + 1]), arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}
const sorted_array = sortedArray(mixArray);
console.log(sorted_array);
