let test1 = [1,2,3];
let test2 = ["a","b","c"];

function zipList(arr1, arr2){
  let arr3 = [];
  for (let i = 0; i < arr2.length; i++){
    arr3.push(arr1[i]);
    arr3.push(arr2[i]);
  }
  return arr3;
}

console.log(zipList(test1,test2));

function zipListTheSimpleWay(arr1, arr2){
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(test1,test2));