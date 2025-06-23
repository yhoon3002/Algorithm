// 가희와 키워드
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, M;
let answer = [];

rl.on("line", function (line) {
    input.push(line);
    [N, M] = input[0].split(" ").map(Number);

    if (input.length === N + M + 1) {
        rl.close();
    }
}).on("close", function () {
    let memoSet = new Set(input.slice(1, N + 1));
    let keywordArr = input.slice(N + 1).map((line) => line.split(","));

    for (let keywords of keywordArr) {
        for (let keyword of keywords) {
            memoSet.delete(keyword);
        }
        answer.push(memoSet.size);
    }

    console.log(answer.join("\n"));
    process.exit();
});
