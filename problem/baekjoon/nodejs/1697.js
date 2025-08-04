// 숨바꼭질
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, K;

rl.on("line", function (line) {
    [N, K] = line.split(" ").map(Number);

    rl.close();
}).on("close", function () {
    // 초기 queue와 방문여부 세팅
    let queue = [[N, 0]];
    let visited = new Array(100001).fill(false);

    while (queue.length > 0) {
        let [position, time] = queue.shift();

        if (position === K) {
            console.log(time);
            break;
        }

        for (let nextMove of [position - 1, position + 1, position * 2]) {
            if (nextMove >= 0 && nextMove <= 100000 && !visited[nextMove]) {
                visited[nextMove] = true;
                queue.push([nextMove, time + 1]);
            }
        }
    }

    process.exit();
});
