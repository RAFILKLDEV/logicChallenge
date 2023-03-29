// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers.
// Example:
// The minimum sum is  and the maximum sum is . The function prints
// 16 24

const array = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  let MinSum = 0;

  arr.forEach((element) => {
    MinSum = MinSum + element;
  });

  let MaxSum = 0;

  arr.forEach((element) => {
    MaxSum = MaxSum + element;
  });

  console.log((MinSum - max) + " " + (MaxSum - min));
}

miniMaxSum(array);
