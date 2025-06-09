// 진우의 달 여행
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, M;

rl.on("line", function (line) {
    input.push(line.trim());

    [N, M] = input[0].split(" ").map(Number);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    let fuelArr = input
        .map((el) => el.split(" ").map((el) => Number(el)))
        .slice(1);

    const dp = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => Array(3).fill(Infinity))
    );

    for (let i = 0; i < M; i++) {
        for (let dir = 0; dir < 3; dir++) {
            dp[0][i][dir] = fuelArr[0][i];
        }
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j < M; j++) {
            for (let dir = 0; dir < 3; dir++) {
                const prevJ = j + (dir - 1);
                if (prevJ < 0 || prevJ >= M) continue;

                for (let prevDir = 0; prevDir < 3; prevDir++) {
                    if (dir === prevDir) continue;

                    dp[i][j][dir] = Math.min(
                        dp[i][j][dir],
                        dp[i - 1][prevJ][prevDir] + fuelArr[i][j]
                    );
                }
            }
        }
    }

    let answer = Infinity;
    for (let j = 0; j < M; j++) {
        for (let dir = 0; dir < 3; dir++) {
            answer = Math.min(answer, dp[N - 1][j][dir]);
        }
    }
    console.log(answer);

    process.exit();
});
