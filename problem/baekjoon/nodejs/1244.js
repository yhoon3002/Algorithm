// 스위치 켜고 끄기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let expectedLines = null;

rl.on("line", function (line) {
    input.push(line.trim());

    if (input.length === 3) {
        expectedLines = 3 + Number(input[2]);
    }

    if (expectedLines && input.length === expectedLines) {
        rl.close();
    }
}).on("close", function () {
    const numberOfSwitch = Number(input[0]);
    let initialSwitch = input[1].split(" ").map(Number);
    const numberOfStudent = Number(input[2]);
    const studentInput = input
        .slice(3)
        .map((line) => line.split(" ").map(Number));

    for (let i = 0; i < numberOfStudent; i++) {
        const [gender, num] = studentInput[i];

        if (gender === 1) {
            // 남학생
            for (let j = num - 1; j < numberOfSwitch; j += num) {
                initialSwitch[j] = initialSwitch[j] === 0 ? 1 : 0;
            }
        } else if (gender === 2) {
            // 여학생
            const idx = num - 1;
            initialSwitch[idx] = initialSwitch[idx] === 0 ? 1 : 0;

            let left = idx - 1;
            let right = idx + 1;

            while (
                left >= 0 &&
                right < numberOfSwitch &&
                initialSwitch[left] === initialSwitch[right]
            ) {
                initialSwitch[left] = initialSwitch[left] === 0 ? 1 : 0;
                initialSwitch[right] = initialSwitch[right] === 0 ? 1 : 0;
                left--;
                right++;
            }
        }
    }

    for (let i = 0; i < initialSwitch.length; i += 20) {
        console.log(initialSwitch.slice(i, i + 20).join(" "));
    }

    process.exit();
});
