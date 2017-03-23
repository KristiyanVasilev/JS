function solve(args) {
    let arr = [];
    for(let i = 0; i < args.length ; i++){
        let tokens = args[i].split(' ');
        let command = tokens[0];
        let numOrIndex = tokens[1];
        if(command === "add"){
            arr.push(numOrIndex)
        } else if(command === "remove"){
            arr.splice(numOrIndex, 1);
        }
    }
    console.log(arr.join('\r\n'));
}