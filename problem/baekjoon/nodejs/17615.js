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

    function minMoveCount(ballColor) {
        // 왼쪽에 공 모으기
        let left = 0;

        while (left < N && RBarr[left] === ballColor) {
            left++;
        }

        let moveLeft = 0;
        for (let i = left; i < N; i++) {
            if (RBarr[i] === ballColor) {
                moveLeft++;
            }
        }

        // 오른쪽에 공 모으기
        let right = N - 1;

        while (right >= 0 && RBarr[right] === ballColor) {
            right--;
        }

        let moveRight = 0;
        for (let i = right; i >= 0; i--) {
            if (RBarr[i] === ballColor) {
                moveRight++;
            }
        }

        return Math.min(moveLeft, moveRight);
    }

    let ans = Math.min(minMoveCount("R"), minMoveCount("B"));

    console.log(ans);

    process.exit();
});
