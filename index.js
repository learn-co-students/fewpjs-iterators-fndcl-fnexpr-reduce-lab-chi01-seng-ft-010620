// const array1 = [1, 2, 3, 4];
// // const reducer = (accumulator, currentValue) => accumulator + currentValue;
//
// // 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer));
// // expected output: 10
//
// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const reducer = (accumulator, currentValue) => { return accumulator + currentValue; }
const differentiator = (accumulator, currentValue) => { return accumulator - currentValue; }

const totalBatteries = batteryBatches.reduce(reducer)
  // return array.reduce(differentiator)

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//   return batches + total
//   }
// )
