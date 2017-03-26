function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length - 1 ; i++){
        let kvp = args[i].split(' ');
        let currentKey = kvp[0];
        let currentValue = kvp[1];
        obj[currentKey] = currentValue;
    }
    let execute = args[args.length - 1];
    console.log(obj[execute] || "None");
}