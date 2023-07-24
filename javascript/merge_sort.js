function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length || j < arr2.length){
    if (arr1[i] > arr2[j] || i == arr1.length){
      result.push(arr2[j]);
      j++
    }else{
      result.push(arr1[i]);
      i++
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr 
  let idx = Math.floor(arr.length / 2);
  let a = arr.slice(0,idx);
  let b = arr.slice(idx);
  return merge(mergeSort(a),mergeSort(b))
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", merge([1,2],[3,4]));

  console.log("");

  console.log("Expecting: [1, 2]");
  console.log("=>", merge([2], [1]));

  console.log("");

  console.log("Expecting: [1, 1, 1, 5]");
  console.log("=>", merge([1,5],[1,1]));

  console.log("");
  console.log("");

  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
