// 쉬운 최단 거리
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let n, m;

rl.on("line", function (line) {
    input.push(line);

    [n, m] = input[0].split(" ").map(Number);

    if (input.length === n + 1) rl.close();
}).on("close", function () {
    let mapArr = input.slice(1).map((el) => el.split(" ").map(Number));

    // 1. -1로 초기화하고, 0인 칸은 0으로 두기
    // 2. 시작점(2) 찾기
    let answer = Array.from(Array(n), () => Array(m).fill(-1));
    let start = [0, 0];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (mapArr[i][j] === 0) {
                answer[i][j] = 0;
            }
            if (mapArr[i][j] === 2) {
                start = [i, j];
            }
        }
    }

    // 3. BFS 탐색 시작

    process.exit();
});
