function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length - 1 ; i++){
        let kvp = args[i].split(' ');
        let currentKey = kvp[0];
        let currentValue = kvp[1];
        obj[currentKey] = currentValue;
        //obj = {key : currentKey, value : currentValue};
        //console.log(obj)
    }
    let execute = args[args.length - 1];
    if(obj.hasOwnProperty(execute)){
        console.log(obj[execute]);
    } else{
        console.log('None');
    }
}