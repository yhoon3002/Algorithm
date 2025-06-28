// 랭킹전 대기열
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let p, m;
rl.on("line", function (line) {
    input.push(line);

    [p, m] = input[0].split(" ").map(Number);

    if (input.length === p + 1) {
        rl.close();
    }
}).on("close", function () {
    let answer = [];

    for (let i = 1; i <= p; i++) {
        if (answer.length === 0) {
            answer.push([input[i]]);
            continue;
        }

        let inputNum = Number(input[i].split(" ")[0]);
        let flag = false;

        for (let j = 0; j < answer.length; j++) {
            let compareNum = Number(answer[j][0].split(" ")[0]);

            if (
                compareNum - 10 <= inputNum &&
                inputNum <= compareNum + 10 &&
                answer[j].length < m
            ) {
                answer[j].push(input[i]);
                flag = true;
            }

            if (flag) {
                break;
            }
        }

        if (!flag) {
            answer.push([input[i]]);
        }
    }

    for (let i = 0; i < answer.length; i++) {
        if (answer[i].length === m) {
            console.log("Started!");
        } else {
            console.log("Waiting!");
        }

        answer[i]
            .sort((a, b) => {
                const nameA = a.split(" ")[1];
                const nameB = b.split(" ")[1];
                return nameA.localeCompare(nameB);
            })
            .forEach((el) => console.log(el));
    }

    process.exit();
});
