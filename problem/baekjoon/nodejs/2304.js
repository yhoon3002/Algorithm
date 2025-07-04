// 창고 다각형
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N;

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0]);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    let arr = input
        .slice(1, N + 1)
        .map((el) => el.split(" ").map(Number))
        .sort((a, b) => a[0] - b[0]); // x 기준 정렬

    let maxY = Math.max(...arr.map((el) => el[1]));
    let maxArr = arr.filter((el) => el[1] === maxY);

    let answer = 0;

    // 왼쪽 → 가장 높은 기둥까지
    let [lx, ly] = arr[0];
    for (let i = 1; i < arr.length; i++) {
        let [x, h] = arr[i];
        if (h > ly) {
            answer += (x - lx) * ly;
            [lx, ly] = [x, h];
        }
        if (h === maxY) break; // 최고 높이 만나면 중단
    }

    // 오른쪽 → 가장 높은 기둥까지
    let [rx, ry] = arr[arr.length - 1];
    for (let i = arr.length - 2; i >= 0; i--) {
        let [x, h] = arr[i];
        if (h > ry) {
            answer += (rx - x) * ry;
            [rx, ry] = [x, h];
        }
        if (h === maxY) break;
    }

    // 가장 높은 기둥 구간 면적 추가
    let startX = maxArr[0][0];
    let endX = maxArr[maxArr.length - 1][0];
    answer += (endX - startX + 1) * maxY;

    console.log(answer);

    process.exit();
});
