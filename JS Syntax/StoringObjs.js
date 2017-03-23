function solve(args) {
    let obj = {};
    for(let i = 0; i < args.length ; i++){
        let tokens = args[i].split(' -> ');
        let name = tokens[0];
        let age = tokens[1];
        let grade = tokens[2];
        obj = { name : name, age : age, grade : grade};
        console.log("Name: " + obj.name);
        console.log("Age: " + obj.age);
        console.log("Grade: " + obj.grade);
    }
}