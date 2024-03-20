// merge two sorted list in leetcode question is 27 ?

var list1 = [1, 2, 4];
var list2 = [1, 3, 4];
var mergelist = [];


// function mergeTwoSortedList(list1, list2) {
//       for (var i = 0; i < list1.length; i++) {
//         mergelist.push(list1[i])
//       }
//       for (var j = 0; j < list2.length; j++) {
//         mergelist.push(list2[j])
//       }
//       mergelist.sort()
//       return mergelist;
// }

// console.log(mergeTwoSortedList(list1, list2))

function mergeTwoSortedList(list1, list2) {
  for (var i = 0; i < list1.length; i++) {
    mergelist.push(list1[i])
  }
  for (var j = 0; j < list2.length; j++) {
    mergelist.push(list2[j])
  }
  mergelist.sort()
  return mergelist;
}

console.log(mergeTwoSortedList(list1, list2))