// 쿠키의 신체 측정
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N = 0;

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0]);

    if (N + 1 === input.length) {
        rl.close();
    }
}).on("close", function () {
    let arr = input.slice(1).map((el) => el.split(""));

    let head = "";
    let heart = "";
    let lastWaist = "";

    // 머리 & 심장의 위치 구하기
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            if (arr[i][j] === "*") {
                head = [i, j];
                heart = [i + 1, j];
                break;
            }
        }

        if (head !== "") {
            break;
        }
    }

    // 왼쪽 팔의 길이 구하기
    let leftArm = 0;

    for (let i = heart[1] - 1; i >= 0; i--) {
        if (arr[heart[0]][i] === "*") {
            leftArm += 1;
        }
    }

    // 오른쪽 팔의 길이 구하기
    let rightArm = 0;

    for (let i = heart[1] + 1; i < N; i++) {
        if (arr[heart[0]][i] === "*") {
            rightArm += 1;
        }
    }

    // 허리의 길이 구하기 + 허리의 마지막 좌표 + (1, 0) 구하기
    let waist = 0;

    for (let i = heart[0] + 1; i < N; i++) {
        if (arr[i][heart[1]] === "*") {
            waist += 1;
        } else if (arr[i][heart[1]] === "_") {
            lastWaist = [i, heart[1]];
            break;
        }
    }

    // 왼쪽 다리의 길이 구하기(허리의 마지막 좌표 + (1, 0)을 이용해서)
    let leftLeg = 0;

    for (let i = lastWaist[0]; i < N; i++) {
        if (arr[i][lastWaist[1] - 1] === "*") {
            leftLeg += 1;
        }
    }

    // 오른쪽 다리의 길이 구하기(허리의 마지막 좌표 + (1, 0)을 이용해서)
    let rightLeg = 0;

    for (let i = lastWaist[0]; i < N; i++) {
        if (arr[i][lastWaist[1] + 1] === "*") {
            rightLeg += 1;
        }
    }

    // 심장의 위치
    // 왼쪽 팔, 오른쪽 팔, 허리, 왼쪽 다리, 오른쪽 다리의 길이 출력
    heart = [heart[0] + 1, heart[1] + 1];

    console.log(heart.join(" "));
    console.log(leftArm, rightArm, waist, leftLeg, rightLeg);

    process.exit();
});
