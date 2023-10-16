const unsortedArray = [4, 8, 5, 9, 3, 6, 2, 7, 1];

// Helper function
function merge(arr1, arr2, originalArr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      originalArr[k] = arr1[i];
      i++;
      k++;
    } else {
      originalArr[k] = arr2[j];
      j++;
      k++;
    }
  }

  while (i < arr1.length) {
    originalArr[k] = arr1[i];
    i++;
    k++;
  }

  while (j < arr2.length) {
    originalArr[k] = arr2[j];
    j++;
    k++;
  }

  return originalArr;
}

// Merge Sort function
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  } else {
    let middle = Math.ceil(arr.length / 2);
    let middleToEnd = arr.length - middle;

    let subArr1 = arr.slice(0, middle);
    let subArr2 = arr.slice(-middleToEnd);

    let sorted1 = mergeSort(subArr1);
    let sorted2 = mergeSort(subArr2);
    return merge(sorted1, sorted2, arr);
  }
}

console.log(mergeSort(unsortedArray));
