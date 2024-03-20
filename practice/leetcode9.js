var x = 1234554325;

function FindPalindrome(x) {
  var reverseString = x.toString().split("").reverse().join("")
  console.log(reverseString, "= x")
  return (x.toString() == reverseString)

}


console.log(FindPalindrome(x))


var string = "1234554321"
function findPalindrome(string) {
    for (var i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return "Not a palindrome"
        }
    }
    return "Its a palindrome"
}

console.log(findPalindrome(string))