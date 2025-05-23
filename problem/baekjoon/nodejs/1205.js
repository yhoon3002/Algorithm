// 등수 구하기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;
let newScore = 0;
let P = 0;
let input = [];

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0].split(" ")[0]);
    newScore = Number(input[0].split(" ")[1]);
    P = Number(input[0].split(" ")[2]);

    if (N === 0) {
        rl.close();
    } else if (input[1] !== undefined) {
        if (input[1].split(" ").length === N) {
            rl.close();
        }
    }
}).on("close", function () {
    if (N === 0) {
        console.log(1);
    } else {
        let scoreArray = input
            .slice(1)[0]
            .split(" ")
            .map((el) => Number(el));
        let rank = 1;
        let duplicateCount = 0;

        for (let i = 0; i < scoreArray.length; i++) {
            if (scoreArray[i] > newScore) {
                rank += 1;
            } else if (scoreArray[i] === newScore) {
                duplicateCount += 1;
            }
        }

        if (rank + duplicateCount > P) {
            console.log(-1);
        } else {
            console.log(rank);
        }
    }

    process.exit();
});
