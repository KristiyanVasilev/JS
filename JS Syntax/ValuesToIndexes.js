function solve(args) {
    let lenght = Number(args[0]);
    let arr = [];
    for(let i = 1; i < args.length ; i++){
        let tokens = args[i].split(" - ").map(Number);
        let currentIndex = tokens[0];
        let currentNumber = tokens[1];
        arr[currentIndex] = currentNumber;
    }
    for(let i = 0; i < lenght; i++) {
        if (arr[i] === undefined) {
            console.log(0);
        }
        else {
            console.log(arr[i]);
        }
    }
}