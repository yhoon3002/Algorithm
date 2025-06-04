// 블로그
// 메모리 초과
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//     input.push(line.trim());

//     if (input.length === 2) {
//         rl.close();
//     }
// }).on("close", function () {
//     let [N, X] = input[0].split(" ").map(Number);
//     let visitorArr = input[1].split(" ").map(Number);

//     let count = N - X + 1;
//     let maxVisitor = 0;
//     let period = 1;

//     for (let i = 0; i < count; i++) {
//         let slicedVisitorArr = visitorArr.slice(i, i + X);

//         let sumOfVisitor = slicedVisitorArr.reduce((acc, cur) => acc + cur, 0);

//         if (sumOfVisitor > maxVisitor) {
//             maxVisitor = sumOfVisitor;
//         } else if (sumOfVisitor === maxVisitor) {
//             period++;
//         }
//     }

//     if (maxVisitor === 0) {
//         console.log("SAD");
//     } else {
//         console.log(maxVisitor);
//         console.log(period);
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

rl.on("line", function (line) {
    input.push(line.trim());

    if (input.length === 2) {
        rl.close();
    }
}).on("close", function () {
    let [N, X] = input[0].split(" ").map(Number);
    let visitorArr = input[1].split(" ").map(Number);

    let sum = 0;
    let tempSum = 0;
    let count = N - X + 1;
    let period = 1;

    for (let i = 0; i < X; i++) {
        sum += visitorArr[i];
    }

    tempSum = sum;

    for (let i = 0; i < count; i++) {
        tempSum = tempSum - visitorArr[i] + visitorArr[i + X];

        if (tempSum > sum) {
            sum = tempSum;
            period = 1;
        } else if (tempSum === sum) {
            period++;
        }
    }

    if (sum === 0) {
        console.log("SAD");
    } else {
        console.log(sum);
        console.log(period);
    }

    process.exit();
});
