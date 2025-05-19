// 비밀번호 발음하기
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    if (line === "end") {
        rl.close();
    } else {
        input.push(line);
    }
}).on("close", function () {
    input.map((el) => passwordCondition(el));

    process.exit();
});

function passwordCondition(password) {
    let vowelArr = ["a", "e", "i", "o", "u"];

    // 1. 모음(a,e,i,o,u) 하나를 반드시 포함하여야 한다.
    let firstCondition = vowelArr.some((vowel) => password.includes(vowel));

    // 2. 모음이 3개 혹은 자음이 3개 연속으로 오면 안 된다.
    let passwordArr = password.split("");
    let countVowel = 0;
    let countConsonant = 0;
    let secondContiditon = true;

    for (let i = 0; i < passwordArr.length; i++) {
        if (vowelArr.includes(passwordArr[i])) {
            countConsonant = 0;
            countVowel += 1;

            if (countVowel === 3) {
                secondContiditon = false;
                break;
            }
        } else {
            countVowel = 0;
            countConsonant += 1;

            if (countConsonant === 3) {
                secondContiditon = false;
                break;
            }
        }
    }

    // 3. 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
    let thirdCondition = true;

    if (passwordArr.length > 1) {
        for (let i = 1; i < passwordArr.length; i++) {
            if (passwordArr[i - 1] === passwordArr[i]) {
                if (passwordArr[i - 1] === "e" || passwordArr[i - 1] === "o") {
                    continue;
                } else {
                    thirdCondition = false;
                }
            }
        }
    }

    // 4. 패스워드 평가
    if (firstCondition && secondContiditon && thirdCondition) {
        console.log(`<${password}> is acceptable.`);
    } else {
        console.log(`<${password}> is not acceptable.`);
    }
}
