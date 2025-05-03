// 벌집
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = 0;

rl.on("line", function (line) {
    input = Number(line);
    rl.close();
}).on("close", function () {
    let answer = 1;

    if (input !== 1) {
        do {
            answer += 1;
        } while (3 * answer * (answer - 1) + 1 < input);
    }

    console.log(answer);

    process.exit();
});
