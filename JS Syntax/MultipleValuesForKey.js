function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length - 1 ; i++){
        let kvp = args[i].split(' ');
        let currentKey = kvp[0];
        let currentValue = kvp[1];
        if(!obj.hasOwnProperty(currentKey)){
            obj[currentKey] = currentValue;
        } else {
            obj[currentKey] += "\r\n" + currentValue;
        }
    }

    let execute = args[args.length - 1];
    if(obj.hasOwnProperty(execute)){
        console.log(obj[execute]);
    } else{
        console.log('None');
    }
}
