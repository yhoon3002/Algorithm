// 예산
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);
    if (input.length === 3) {
        rl.close();
    }
}).on("close", function () {
    input = input.map((el) => el.split(" ").map(Number));

    let [N, arr, M] = input;

    let low = 0;
    let high = Math.max(...arr);

    let result = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let total = 0;

        for (let i = 0; i < N[0]; i++) {
            total += Math.min(mid, arr[i]);
        }

        if (total <= M[0]) {
            result = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log(result);

    process.exit();
});
