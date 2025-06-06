// 수 이어 쓰기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(...line.trim());

    rl.close();
}).on("close", function () {
    let pointer = 0;
    let current = 1;

    while (pointer < input.length) {
        let str = current.toString();

        for (let i = 0; i < str.length; i++) {
            if (str[i] === input[pointer]) {
                pointer += 1;
                if (pointer === input.length) break;
            }
        }

        current += 1;
    }

    console.log(current - 1);
    process.exit();
});
