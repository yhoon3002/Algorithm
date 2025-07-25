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
    let sushi = input.slice(1).map(Number);

    let kind = new Array(d + 1).fill(0);
    let cnt = 0;

    for (let i = 0; i < k; i++) {
        if (kind[sushi[i]] === 0) cnt++;
        kind[sushi[i]]++;
    }

    let answer = kind[c] === 0 ? cnt + 1 : cnt;

    for (let i = 1; i < N; i++) {
        kind[sushi[i - 1]]--;
        if (kind[sushi[i - 1]] === 0) cnt--;

        let next = sushi[(i + k - 1) % N];
        if (kind[next] === 0) cnt++;
        kind[next]++;

        let temp = cnt;
        if (kind[c] === 0) temp++;
        if (temp > answer) answer = temp;
    }

    console.log(answer);
    process.exit();
});
