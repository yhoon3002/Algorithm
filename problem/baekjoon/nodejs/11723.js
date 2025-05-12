// 집합
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;
let S = 0;
let input = [];
let inputArr = [];

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0]);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    inputArr = input.slice(1);

    inputArr.forEach((el) => bitMasking(el));

    process.exit();
});

function bitMasking(command) {
    if (command.startsWith("add")) {
        // 1. 명령어에서 숫자를 뽑는다.
        let number = Number(command.split(" ")[1]);

        // 2. "숫자"에 해당하는 비트를 1로 설정한다.
        S |= 1 << (number - 1);
    } else if (command.startsWith("remove")) {
        // 1. 명령어에서 숫자를 뽑는다.
        let number = Number(command.split(" ")[1]);

        // 2. "숫자"에 해당하는 비트를 0으로 설정한다.
        // 이 때, 다른 비트는 그대로 두고, "숫자" 비트만 0으로 설정해야한다.
        // AND 연산을 쓰고, "숫자" 비트를 제외한 나머지는 1로 만들어야한다.
        S &= ~(1 << (number - 1));
    } else if (command.startsWith("check")) {
        // 1. 명령어에서 숫자를 뽑는다.
        let number = Number(command.split(" ")[1]);

        // 2. "숫자" 비트가 S 안에 있는지 없는지 확인한다.
        if (S & (1 << (number - 1))) {
            console.log("1");
        } else {
            console.log("0");
        }
    } else if (command.startsWith("toggle")) {
        // 1. 명령어에서 숫자를 뽑는다.
        let number = Number(command.split(" ")[1]);

        // 2. "숫자" 비트가 S에 있으면 "숫자" 비트를 삭제 / 없으면 "숫자" 비트를 추가
        S ^= 1 << (number - 1);
    } else if (command.startsWith("all")) {
        // S를 {1, 2, ..., 20}으로 바꾼다.
        S = (1 << 20) - 1;
    } else if (command.startsWith("empty")) {
        // S를 공집합(0)으로 바꾼다.
        S = 0;
    }
}
