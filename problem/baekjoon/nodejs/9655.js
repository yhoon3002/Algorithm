// 돌 게임
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
//     if (input % 2 === 0) {
//         console.log("CY");
//     } else {
//         console.log("SK");
//     }

//     process.exit();
// });

//
// DP로 푸는 방법
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;
let dp = [];

rl.on("line", function (line) {
    input = Number(line);

    rl.close();
}).on("close", function () {
    dp = Array(input + 1).fill("");

    dp[1] = "SK";
    dp[2] = "CY";
    dp[3] = "SK";

    for (let i = 4; i <= input; i++) {
        if (dp[i - 1] === "CY" || dp[i - 3] === "CY") {
            dp[i] = "SK";
        } else {
            dp[i] = "CY";
        }
    }

    console.log(dp[input]);

    process.exit();
});
