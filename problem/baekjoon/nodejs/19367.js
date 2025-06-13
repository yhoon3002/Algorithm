// IF문 좀 대신 써줘
// 시간 초과 : O(N*M)
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];
// let N, M;

// rl.on("line", function (line) {
//     input.push(line);
//     [N, M] = input[0].split(" ").map(Number);

//     if (input.length === N + M + 1) {
//         rl.close();
//     }
// }).on("close", function () {
//     // 입력 분리
//     let titleTypeArr = input.slice(1, N + 1).map((el) => el.split(" "));
//     let combatPowerArr = input.slice(N + 1, N + M + 1).map(Number);

//     // 전투력 범위와 칭호 범위 나누기
//     let titleRangeArr = titleTypeArr.map((el) => el[0]);
//     let combatRangeArr = titleTypeArr.map((el) => Number(el[1]));

//     // 겹치는 전투력 범위와 칭호 범위 확인하기
//     for (let i = 0; i < N; i++) {
//         for (let j = 0; j < N; j++) {
//             if (i !== j) {
//                 if (combatRangeArr[i] === combatRangeArr[j]) {
//                     combatRangeArr[j] = -1;
//                 }
//             }
//         }
//     }

//     // 입력된 전투력으로 칭호 분류하고 출력하기
//     for (let i = 0; i < M; i++) {
//         let title = "";

//         for (let j = 0; j < N; j++) {
//             if (combatRangeArr[j] === -1) {
//                 continue;
//             } else {
//                 if (combatRangeArr[j] >= combatPowerArr[i]) {
//                     title = titleRangeArr[j];
//                     break;
//                 } else if (combatRangeArr[j] < combatPowerArr[i]) {
//                     continue;
//                 }
//             }
//         }

//         console.log(title);
//     }

//     process.exit();
// });

// 두번째 풀이
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, M;

rl.on("line", function (line) {
    input.push(line);
    [N, M] = input[0].split(" ").map(Number);

    if (input.length === N + M + 1) {
        rl.close();
    }
}).on("close", function () {
    // 입력 분리
    let titleTypeArr = input.slice(1, N + 1).map((el) => el.split(" "));
    let combatPowerArr = input.slice(N + 1, N + M + 1).map(Number);

    // 전투력 범위와 칭호 범위 나누기
    let titleRangeArr = titleTypeArr.map((el) => el[0]);
    let combatRangeArr = titleTypeArr.map((el) => Number(el[1]));

    // 겹치는 전투력 범위와 칭호 범위 확인하기
    // 각각의 입력된 전투력을 이분탐색으로 칭호 확인
    let answer = [];

    for (let i = 0; i < combatPowerArr.length; i++) {
        let left = 0;
        let right = combatRangeArr.length - 1;
        let combatPower = combatPowerArr[i];
        let result = "";

        while (left <= right) {
            let mid = parseInt((left + right) / 2);
            if (combatPower <= combatRangeArr[mid]) {
                result = titleRangeArr[mid];
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }

        answer.push(result);
    }

    console.log(answer.join("\n"));

    process.exit();
});
