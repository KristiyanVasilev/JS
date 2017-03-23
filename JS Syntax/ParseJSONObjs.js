function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length ; i++){
        let input = args[i];
        let str = JSON.parse(input);
        console.log("Name: " + str.name);
        console.log("Age: " + str.age);
        console.log("Date: " + str.date);
    }
}
