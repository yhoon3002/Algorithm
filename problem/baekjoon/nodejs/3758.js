// KCPC
// 런타임 에러
// const fs = require("fs");
// // const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// let input = fs.readFileSync("../input/3758.txt").toString().trim().split("\n");

// input = input.map((el) => el.split(" ").map(Number));

// let n, k, t, m;
// let compareArr = [];
// let sortArr = [];
// let totalScore = [];

// for (let a = 1; a < input.length; a++) {
//     if (input[a].length === 4) {
//         [n, k, t, m] = input[a];

//         compareArr = input.slice(a + 1, a + m + 1);

//         let lastSubmitArr = new Array(n).fill(-1);
//         // 마지막 제출 순서 배열에 넣기
//         for (let b = 0; b < m; b++) {
//             lastSubmitArr[compareArr[b][0] - 1] = b;
//         }

//         sortArr = compareArr.sort((a, b) => {
//             if (a[0] !== b[0]) {
//                 return a[0] - b[0];
//             } else {
//                 if (a[1] !== b[1]) {
//                     return a[1] - b[1];
//                 } else {
//                     if (a[2] !== b[2]) {
//                         return a[2] - b[2];
//                     }
//                 }
//             }
//         });

//         totalScore = Array.from(new Array(n), () => new Array(k + 1).fill(0));

//         // 0번째 인덱스는 총 시도 횟수
//         // 각 팀의 문제 번호의 최대 점수 배열에 넣기
//         for (let b = 0; b < m; b++) {
//             totalScore[sortArr[b][0] - 1][sortArr[b][1]] = sortArr[b][2];
//             totalScore[sortArr[b][0] - 1][0] += 1;
//         }

//         let sumTotalScore = Array(n).fill(0);

//         // 각 팀의 총합 구하기
//         for (let b = 0; b < n; b++) {
//             for (let c = 1; c < k + 1; c++) {
//                 sumTotalScore[b] += totalScore[b][c];
//             }
//         }

//         let rank = 1;
//         // 각 팀 순위 정하기
//         for (let b = 0; b < n; b++) {
//             if (b !== t - 1) {
//                 if (sumTotalScore[t - 1] < sumTotalScore[b]) {
//                     rank += 1;
//                 } else if (sumTotalScore[t - 1] === sumTotalScore[b]) {
//                     if (totalScore[t - 1][0] === totalScore[b][0]) {
//                         // 마지막 제출 시간이 더 빠른 팀이 순위 높음
//                         if (lastSubmitArr[t - 1] > lastSubmitArr[b]) {
//                             rank += 1;
//                         }
//                     } else if (totalScore[t - 1][0] > totalScore[b][0]) {
//                         // 풀이를 제출한 횟수가 적은 팀이 순위 높음
//                         rank += 1;
//                     }
//                 }
//             }
//         }

//         return rank;
//     }
// }

// 두번째 풀이
// 통과
const fs = require("fs");
// let input = fs.readFileSync("../input/3758.txt").toString().trim().split("\n");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = Number(input[0]);
let index = 1;

for (let tc = 0; tc < T; tc++) {
    let [n, k, t, m] = input[index].split(" ").map(Number);

    // 각 팀의 문제에 대한 최대점수 저장하기 위한 배열
    let teamMaxScore = Array.from(new Array(n), () => new Array(k).fill(0));
    // 각 팀의 제출 횟수를 저장하기 위한 배열
    let calCount = new Array(n).fill(0);
    // 각 팀의 마지막 제출 시간을 저장하기 위한 배열
    let lastSubmit = new Array(n).fill(-1);

    index++;

    for (let i = 0; i < m; i++) {
        let score = input[index].split(" ").map(Number);

        // 각 팀별 제출한 문제에 대해 최대값 구하기
        if (score[2] > teamMaxScore[score[0] - 1][score[1] - 1]) {
            teamMaxScore[score[0] - 1][score[1] - 1] = score[2];
        }

        // 각 팀별 제출 횟수 구하기
        calCount[score[0] - 1] += 1;

        // 각 팀별 마지막 제출 시간 구하기
        lastSubmit[score[0] - 1] = index;

        index++;
    }

    // 팀별 최종 총합 구하기
    let teamMaxSumScore = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < k; j++) {
            teamMaxSumScore[i] += teamMaxScore[i][j];
        }
    }

    // 등수 계산하기
    let rank = 1;
    for (let i = 0; i < n; i++) {
        if (teamMaxSumScore[i] > teamMaxSumScore[t - 1]) {
            rank += 1;
        } else if (
            teamMaxSumScore[i] === teamMaxSumScore[t - 1] &&
            calCount[i] === calCount[t - 1]
        ) {
            if (lastSubmit[i] < lastSubmit[t - 1]) {
                rank += 1;
            }
        } else if (teamMaxSumScore[i] === teamMaxSumScore[t - 1]) {
            if (calCount[i] < calCount[t - 1]) {
                rank += 1;
            }
        }
    }

    console.log(rank);
}
