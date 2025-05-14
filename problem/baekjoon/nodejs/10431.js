// 줄세우기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let P = 0;
let studentLines = [];

rl.on("line", function (line) {
    input.push(line);

    P = Number(input[0]);

    if (input.length === P + 1) {
        rl.close();
    }
}).on("close", function () {
    studentLines = input.slice(1);

    studentLines.forEach((el, index) => {
        let studentLine = el
            .split(" ")
            .slice(1)
            .map((el) => Number(el));

        console.log(index + 1, calculateStep(studentLine));
    });

    process.exit();
});

function calculateStep(studentLine) {
    let count = 0;
    let emptyArr = [];

    emptyArr.push(studentLine[0]);

    for (let i = 1; i < studentLine.length; i++) {
        let flag = true;

        for (let j = 0; j < emptyArr.length; j++) {
            if (emptyArr[j] > studentLine[i]) {
                count += emptyArr.length - j;
                emptyArr.splice(j, 0, studentLine[i]);
                flag = false;
                break;
            }
        }

        if (flag === true) {
            emptyArr.push(studentLine[i]);
        }
    }

    return count;
}
