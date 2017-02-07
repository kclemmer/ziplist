/**
 * Solving Experience E27 - Try 2
 * Created by ijnek on 2/6/2017.
 */

const tlist1 = [1, 2, 3];
const tlist2 = ['a', 'b', 'c'];

function zipList(list1, list2) {
  const outlist = [];
  if(list1.length != list2.length){
    return 'Lists not equal length';
  }
  for (let i = 0; i < list1.length; i++) {
    outlist.push(list1[i]);
    outlist.push(list2[i]);
  }
  return outlist;
}

console.log(zipList(tlist1, tlist2));

function zipListTheSimpleWay(list1, list2){
  let pass1 = _.zip(list1, list2);
  return _.flatten(pass1);
}

console.log(zipListTheSimpleWay(tlist1, tlist2));

// 14m 22.5s
