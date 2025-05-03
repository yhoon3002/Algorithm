// 단어 공부
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
    input = line;

    rl.close();
}).on("close", function () {
    const arr = input.toUpperCase().split("");
    let object = {};
    let answer = "";

    for (let i = 0; i < arr.length; i++) {
        if (Object.keys(object).includes(arr[i])) {
            object[arr[i]]++;
        } else {
            object[arr[i]] = 1;
        }
    }

    let maxCount = 0;
    for (const [key, value] of Object.entries(object)) {
        if (value > maxCount) {
            answer = key;
            maxCount = value;
        } else if (value === maxCount) {
            answer = "?";
        }
    }

    console.log(answer);
});

// 간결 코드
// const readline = require("readline");

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let input = "";

// rl.on("line", function (line) {
//     input = line;
//     rl.close();
// }).on("close", function () {
//     const chars = input.toUpperCase().split("");
//     const count = {};

//     for (let char of chars) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     const max = Math.max(...Object.values(count));
//     const candidates = Object.entries(count).filter(([_, v]) => v === max);

//     const answer = candidates.length > 1 ? "?" : candidates[0][0];
//     console.log(answer);
// });
