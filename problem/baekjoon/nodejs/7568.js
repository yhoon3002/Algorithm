// 덩치
// 런타임 에러로 제출 실패
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//     input.push(line);

//     let N = Number(input[0]);

//     if (input.length === N + 1) {
//         rl.close();
//     }
// }).on("close", function () {
//     let buildArr = input.slice(1).map((el) => el.split(" ").map(Number));

//     let sortedBuildArr = buildArr.toSorted(
//         (a, b) => b[0] - a[0] || b[1] - a[1]
//     );

//     // sortedBuildArr을 이용해서 순위 매기기(sortedRank에 저장)
//     let sortedRank = new Array(sortedBuildArr.length).fill(1);
//     let rank = [...sortedRank];

//     for (let i = 1; i < sortedBuildArr.length; i++) {
//         if (
//             sortedBuildArr[i - 1][0] > sortedBuildArr[i][0] &&
//             sortedBuildArr[i - 1][1] > sortedBuildArr[i][1]
//         ) {
//             sortedRank[i] = i + 1;
//         } else {
//             sortedRank[i] = sortedRank[i - 1];
//         }
//     }

//     // 기존 배열인 buildArr을 순위를 매기기(rank에 저장)
//     for (let i = 0; i < buildArr.length; i++) {
//         for (let j = 0; j < sortedBuildArr.length; j++) {
//             if (
//                 buildArr[i][0] === sortedBuildArr[j][0] &&
//                 buildArr[i][1] === sortedBuildArr[j][1]
//             ) {
//                 rank[i] = sortedRank[j];
//                 break;
//             }
//         }
//     }

//     console.log(rank.join(" "));

//     process.exit();
// });

// 덩치
// 두 번째 풀이
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);

    let N = Number(input[0]);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    let buildArr = input.slice(1).map((el) => el.split(" ").map(Number));

    let rank = [];

    for (let i = 0; i < buildArr.length; i++) {
        let tempRank = 1;

        for (let j = 0; j < buildArr.length; j++) {
            if (i === j) {
                continue;
            } else {
                if (
                    buildArr[i][0] < buildArr[j][0] &&
                    buildArr[i][1] < buildArr[j][1]
                ) {
                    tempRank += 1;
                }
            }
        }
        rank[i] = tempRank;
    }

    console.log(rank.join(" "));

    process.exit();
});
