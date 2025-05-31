// 카드2

// 첫번째 풀이
// 메모리 초과
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = 0;

// rl.on("line", function (line) {
//     input = Number(line);

//     rl.close();
// }).on("close", function () {
//     let arr = [];

//     for (let i = 0; i < input; i++) {
//         arr[i] = i + 1;
//     }

//     while (arr.length !== 1) {
//         // 맨 위의 카드 버리기
//         arr = arr.slice(1);

//         // 맨 위의 카드를 맨 아래의 카드 밑에 두기
//         let topCard = arr[0];
//         arr = [...arr, topCard];

//         arr = arr.slice(1);
//     }

//     console.log(arr[0]);

//     process.exit();
// });

// 두번째 풀이
// 시간초과
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let N = 0;

// rl.on("line", function (line) {
//     N = Number(line);
//     rl.close();
// }).on("close", function () {
//     let queue = [];

//     for (let i = 1; i <= N; i++) {
//         queue.push(i);
//     }

//     while (queue.length > 1) {
//         queue.shift(); // 버리기
//         queue.push(queue.shift()); // 아래로 보내기
//     }

//     console.log(queue[0]);

//     process.exit();
// });

// 세번째 풀이
// 통과
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;

rl.on("line", function (line) {
    N = Number(line);

    rl.close();
}).on("close", function () {
    let queue = [];
    let head = 0;
    let tail = N;

    for (let i = 0; i < N; i++) {
        queue[i] = i + 1;
    }

    while (tail - head > 1) {
        head++;
        queue[tail++] = queue[head++];
    }

    console.log(queue[head]);

    process.exit();
});
