// 돌 게임
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
    input = Number(line);

    rl.close();
}).on("close", function () {
    if (input % 2 === 0) {
        console.log("CY");
    } else {
        console.log("SK");
    }

    process.exit();
});
