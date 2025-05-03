// ZOAC 4
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input = line.split(" ").map(Number);

    rl.close();
}).on("close", function () {
    const [H, W, N, M] = input;

    const vertical = Math.ceil(H / (N + 1));
    const horizontal = Math.ceil(W / (M + 1));

    console.log(horizontal * vertical);

    process.exit();
});
