// 비슷한 단어
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

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    input = input.slice(1);
    let toCodeArr = [];

    // 1. 각 단어의 문자 개수 세기(기준 단어 포함)
    for (let i = 0; i < N; i++) {
        let toCodeWord = new Array(26).fill(0);

        for (let j = 0; j < input[i].length; j++) {
            toCodeWord[input[i][j].charCodeAt() - 65] += 1;
        }

        toCodeArr[i] = toCodeWord;
    }

    let answer = 0;
    let difference = 0;
    // 2. 첫 줄의 단어를 기준 단어로 설정하기
    let basisWord = toCodeArr[0];

    // 3. 다른 단어들과 비교하기
    for (let i = 1; i < N; i++) {
        difference = 0;
        // 4. 문자의 개수 차이 계산하기
        for (let j = 0; j < 26; j++) {
            difference += Math.abs(basisWord[j] - toCodeArr[i][j]);
        }

        // 차이에 따라 분기
        // 0: 일치, 1: 한글자만 추가 or 삭제, 2: 길이가 같으면 한글자를 바꾸면 유사, 3 이상: 두 글자 이상 차이(비슷하지 않음)
        if (difference === 0) {
            answer += 1;
        } else if (difference === 1) {
            answer += 1;
        } else if (difference === 2) {
            if (input[0].length === input[i].length) {
                answer += 1;
            }
        }
    }

    console.log(answer);

    process.exit();
});
