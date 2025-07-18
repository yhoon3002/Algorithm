// 지름길
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, D;

rl.on("line", function (line) {
    input.push(line);

    [N, D] = input[0].split(" ").map(Number);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    // 초기 세팅
    let answer = [];

    for (let i = 0; i <= D; i++) {
        answer[i] = i;
    }

    // 유효한 지름길 필터링
    let shortcuts = [];

    for (let i = 1; i <= N; i++) {
        let [start, end, shortcut] = input[i].split(" ").map(Number);

        if (end - start > shortcut && end <= D) {
            shortcuts.push([start, end, shortcut]);
        }
    }

    for (let i = 0; i <= D; i++) {
        // 일반 도로 이동
        if (i + 1 <= D) {
            answer[i + 1] = Math.min(answer[i + 1], answer[i] + 1);
        }

        // 지름길 이동
        for (let [start, end, shortcut] of shortcuts) {
            if (start === i) {
                answer[end] = Math.min(answer[end], answer[i] + shortcut);
            }
        }
    }

    console.log(answer[D]);

    process.exit();
});
