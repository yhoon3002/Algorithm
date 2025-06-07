// 햄버거 분배
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);

    if (input.length === 2) {
        rl.close();
    }
}).on("close", function () {
    let [N, K] = input[0].split(" ").map(Number);
    let table = input[1].split("");

    let count = 0;

    for (let i = 0; i < N; i++) {
        if (table[i] === "P") {
            for (let j = i - K; j <= i + K; j++) {
                if (j >= 0 && table[j] === "H") {
                    table[j] = "EAT";
                    count++;
                    break;
                }
            }
        }
    }

    console.log(count);
    process.exit();
});
