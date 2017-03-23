function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length ; i++){
        let tokens = args[i].split('->');
        let key = tokens[0].trim();
        let value;
        if(key === 'age' || key === 'grade'){
             value = Number(tokens[1]);
        } else {
             value = tokens[1].trim();
        }
        obj[key] = value;
    }
    let result = JSON.stringify(obj);
    console.log(result);
}
solve(['name -> Angel','surname -> Georgiev','age -> 20','grade -> 6.00','date -> 23/05/1995','town -> Sofia']);
