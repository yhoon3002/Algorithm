// 주식
const readline = require("readline");

rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let T;

rl.on("line", function (line) {
    input.push(line);

    T = Number(input[0]);

    if (input.length === T * 2 + 1) {
        rl.close();
    }
}).on("close", function () {
    for (let i = 1; i <= T; i++) {
        let N = Number(input[i * 2 - 1]);
        let price = input[i * 2].split(" ").map(Number);

        let max = 0;
        let profit = 0;

        for (let i = N - 1; i >= 0; i--) {
            if (price[i] > max) {
                max = price[i];
            } else {
                profit += max - price[i];
            }
        }

        console.log(profit);
    }

    process.exit();
});
