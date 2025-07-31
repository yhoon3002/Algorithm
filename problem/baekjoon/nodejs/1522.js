// 문자열 교환
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = "";

rl.on("line", function (line) {
    input = line.split("");

    rl.close();
}).on("close", function () {
    // aabbaaabaaba
    let aCount = input.filter((el) => el === "a").length;
    let slidingInput = input.concat(input);

    let minCount = Infinity;
    let bCount = 0;

    for (let i = 0; i < aCount; i++) {
        if (slidingInput[i] === "b") bCount++;
    }
    minCount = bCount;

    for (let i = 1; i < input.length; i++) {
        if (slidingInput[i - 1] === "b") bCount--;

        if (slidingInput[i + aCount - 1] === "b") bCount++;

        minCount = Math.min(minCount, bCount);
    }

    console.log(minCount);

    process.exit();
});
