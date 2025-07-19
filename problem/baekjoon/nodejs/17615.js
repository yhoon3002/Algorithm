// 볼 모으기
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
    let N = Number(input[0]);
    let RBarr = input[1].split("");

    // 빨간색 공 옮기기
    function moveRedBall(ballColor) {
        for (let i = N - 1; i >= 0; i--) {
            for (let j = N - 1; j >= 0; j--) {
                if (i < N - 1 && RBarr[i] === ballColor) {
                    //
                }
            }
        }
    }

    process.exit();
});
