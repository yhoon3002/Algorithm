// 삼각형과 세 변
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    line = line.split(" ").map(Number);

    if (line[0] === 0 && line[1] === 0 && line[2] === 0) {
        rl.close();
    } else {
        input.push(line);
    }
}).on("close", function () {
    input.map((el) => filterTriangle(el));

    process.exit();
});

function filterTriangle(tempArr) {
    const maxNum = Math.max(...tempArr);
    const sumOfRest = tempArr.reduce((acc, cur) => acc + cur, 0) - maxNum;

    if (maxNum >= sumOfRest) {
        console.log("Invalid");
    } else {
        const tempSet = new Set(tempArr);

        console.log(
            tempSet.size === 1
                ? "Equilateral"
                : tempSet.size === 2
                ? "Isosceles"
                : "Scalene"
        );
    }
}
