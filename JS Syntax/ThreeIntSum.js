function sum(arr) {
    let nums = arr[0].split(' ').map(Number);
    console.log(
        chek(nums[0], nums[1], nums[2]) ||
        chek(nums[0], nums[2], nums[1]) ||
        chek(nums[1], nums[2], nums[0]) ||
        "No"
    );

    function chek(num1, num2, sum) {
        if(num1 + num2 !== sum){
            return false;
        }
        if(num1 > num2){
            [num1, num2] = [num2, num1];
        }
        return `${num1} + ${num2} = ${sum}`;
    }
}


