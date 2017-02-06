/**
 * Solving Experience E27
 * Created by ijnek on 2/6/2017.
 */

const a = [1, 2, 3];
const b = ['a', 'b', 'c'];

function zipList(list1, list2) {
  let output = [];
  if (list1.length != list2.length){
    return 'Arrays are not equal';
  }
  for (let i = 0; i < list1.length; i++){
    output.push(list1[i]);
    output.push(list2[i]);
  }
  return output;
}

console.log(zipList(a, b));

function zipListTheSimpleWay(list1, list2) {
  return _.zip(list1, list2);
}

console.log(zipListTheSimpleWay(a, b));

// 25m 11.0s
