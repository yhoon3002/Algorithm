// 임스와 함께하는 미니게임
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let num = 0;
let gameType = "";

rl.on("line", function (line) {
    input.push(line);

    [num, gameType] = input[0].split(" ");

    if (Number(num) + 1 === input.length) {
        rl.close();
    }
}).on("close", function () {
    let arr = input.slice(1);
    let peopleSet = new Set(arr);
    let answer = 0;

    if (gameType === "Y") {
        answer = parseInt(peopleSet.size);
    } else if (gameType === "F") {
        answer = parseInt(peopleSet.size / 2);
    } else {
        answer = parseInt(peopleSet.size / 3);
    }

    console.log(answer);

    process.exit();
});
