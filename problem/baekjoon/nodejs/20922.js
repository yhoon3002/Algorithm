//겹치는 건 싫어
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, K;

rl.on("line", function (line) {
    input.push(line);

    if (input.length === 2) {
        rl.close();
    }
}).on("close", function () {
    [N, K] = input[0].split(" ").map(Number);
    let sequence = input[1].split(" ").map(Number);
    let duplicate = new Array(100001).fill(0);

    let answer = 0;
    let start = 0;
    let end = 0;

    while (end < N) {
        duplicate[sequence[end]]++;

        while (duplicate[sequence[end]] > K) {
            duplicate[sequence[start]]--;
            start++;
        }

        answer = Math.max(answer, end - start + 1);

        end++;
    }

    console.log(answer);

    process.exit();
});
