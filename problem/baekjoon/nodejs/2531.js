// 회전 초밥
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, d, k, c;

rl.on("line", function (line) {
    input.push(line);

    // 회전 초밥 벨트에 놓인 접시의 수 N
    // 초밥의 가짓수 d
    // 연속해서 먹는 접시의 수 k
    // 쿠폰 번호 c
    [N, d, k, c] = input[0].split(" ").map(Number);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    let sushiArr = input.slice(1).map(Number);

    for (let i = 0; i < k - 1; i++) {
        sushiArr.push(sushiArr[i]);
    }

    let start = 0;
    let end = 0;
    while (start < N) {
        start++;
    }

    process.exit();
});
