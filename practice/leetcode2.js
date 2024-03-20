// add two numbers in leetcode question is 2 ?

var l1 = [2, 4, 3];
var l2 = [5, 6, 4];

// function addTwoNumbers(l1, l2) {
//     let result = [];
//     const maxLength = Math.max(l1.length, l2.length);

//     for (let i = 0; i < maxLength; i++) {
//         let l1 = l1[i] || 0;
//         let l2 = l2[i] || 0;
//         result.push(l1 + l2);
//     }

//     return result;
// }

// console.log(addTwoNumbers(l1, l2))


function addTwoNumbers(l1, l2) {
    let List = new ListNode(0);
    let head = List;

    let sum = 0;
    let carry = 0;

    while(l1 !== null || l2 !== null || sum !== 0) {
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        if(sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }
        head.next = new ListNode(sum);
        head = head.next;
        sum = carry;
        carry = 0;
    }
    return List.next;
}

console.log(addTwoNumbers(l1, l2))