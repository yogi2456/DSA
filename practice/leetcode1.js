var nums = [2, 7, 11, 15];
var target = 9;

function TwoSumNumbers(nums, target) {
    for (var i = 0; i < nums.length - 1; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] == target) {
                console.log(i,j)
            }
        }
    }
}


TwoSumNumbers(nums, target)