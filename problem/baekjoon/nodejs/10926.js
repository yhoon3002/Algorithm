// ??!
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
    input.push(line);

    if(input.length === 1){
        rl.close();
    }
}).on("close", function(){
    console.log(input[0] + "??!");

    process.exit();
});