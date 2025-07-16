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
    queue = [start];
    answer[start[0]][start[1]] = 0;

    dx = [-1, 1, 0, 0];
    dy = [0, 0, -1, 1];

    while (queue.length > 0) {
        let [x, y] = queue.shift();

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];

            if (
                nx >= 0 &&
                nx < n &&
                ny >= 0 &&
                ny < m &&
                mapArr[nx][ny] === 1 &&
                answer[nx][ny] === -1
            ) {
                answer[nx][ny] = answer[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }

    answer = answer.map((el) => el.join(" "));

    answer.map((el) => console.log(el));

    process.exit();
});
