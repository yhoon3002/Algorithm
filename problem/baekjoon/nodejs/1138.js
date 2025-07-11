// 한 줄로 서기
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
    let heightArr = input[1].split(" ").map(Number);
    let answer = new Array(N).fill(0);

    for (let i = 0; i < N; i++) {
        let zeroCount = 0;
        let tallerCount = heightArr[i];

        for (let j = 0; j < N; j++) {
            if (answer[j] === 0) {
                if (zeroCount === tallerCount) {
                    answer[j] = i + 1;
                    break;
                }
                zeroCount++;
            }
        }
    }

    console.log(answer.join(" "));

    process.exit();
});
