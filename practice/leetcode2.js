// add two numbers in leetcode question is 2 ?

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

function addTwoNumbers(l1, l2) {
    let result = [];
    const maxLength = Math.max(l1.length, l2.length);

    for (let i = 0; i < maxLength; i++) {
        let l1 = l1[i] || 0;
        let l2 = l2[i] || 0;
        result.push(l1 + l2);
    }

    return result;
}

console.log(addTwoNumbers(l1, l2))