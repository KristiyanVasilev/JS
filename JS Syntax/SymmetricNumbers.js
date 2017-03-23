function solve(arr) {
    let n = Number(arr[0]);
    let result = '';

    for(let i = 1; i <= n; i++){
        if(isSymmetric(i)){
            result += i + " ";
        }
    }
    console.log(result);

    function isSymmetric(number) {
        number = number.toString();
        let lenght = number.length;
        for(let i = 0; i < lenght / 2; i++){
            if(number[i] !== number[lenght - 1 - i]){
                return false;
            }
        }
        return true;
        
    }
}

