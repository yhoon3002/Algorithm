// 1998년생인 내가 태국에서는 2541년생?!
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);

    if (input.length === 1) {
        rl.close();
    }
}).on("close", function () {
    console.log(input[0] - 543);

    process.exit();
});
