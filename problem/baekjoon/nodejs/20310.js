// 타노스
// 25점
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input;

// rl.on("line", function (line) {
//     input = line;

//     rl.close();
// }).on("close", function () {
//     input = input.split("");
//     let count = parseInt(input.length / 2);

//     let oddIndex = 0;
//     let evenIndex = input.length - 1;

//     for (let i = 0; i < count; i++) {
//         if (i % 2 === 0) {
//             // 홀수일때 odd
//             // 앞에서부터 1제거
//             input.splice(oddIndex, 1);
//             oddIndex += 1;
//             evenIndex -= 1;
//         } else {
//             // 짝수일때 even
//             // 뒤에서부터 0제거
//             input.splice(evenIndex, 1);
//             evenIndex -= 2;
//         }
//     }

//     console.log(input.join(""));

//     process.exit();
// });

// 두 번째 풀이
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input;

rl.on("line", function (line) {
    input = line;

    rl.close();
}).on("close", function () {
    input = input.split("").map(Number);
    let zeroArr = [];
    let oneArr = [];

    input.map((el, i) => (el === 0 ? zeroArr.push(i) : oneArr.push(i)));

    // zeroArr은 뒤에서 parseInt(zeroArr.length / 2)만큼 제외시킴
    let zeroCount = parseInt(zeroArr.length / 2);
    zeroArr = zeroArr.slice(0, zeroArr.length - zeroCount);

    // oneArr은 앞에서 parseIntI(oneArr.length / 2)만큼 제외시킴
    let oneCount = parseInt(oneArr.length / 2);
    oneArr = oneArr.slice(oneArr.length - oneCount, oneArr.length);

    let answer = "";
    let zeroPointer = 0;
    let onePointer = 0;
    while (zeroPointer < zeroArr.length && onePointer < oneArr.length) {
        if (zeroArr[zeroPointer] < oneArr[onePointer]) {
            answer += "0";
            zeroPointer++;
        } else {
            answer += "1";
            onePointer++;
        }
    }

    while (zeroPointer < zeroArr.length) {
        answer += "0";
        zeroPointer++;
    }
    while (onePointer < oneArr.length) {
        answer += "1";
        onePointer++;
    }

    console.log(answer);

    process.exit();
});
