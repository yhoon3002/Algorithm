// 올림픽
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N, K;
let countryMedalArr = [];
let targetCountry = [];

rl.on("line", function (line) {
    input.push(line);

    [N, K] = input[0].split(" ").map((el) => Number(el));

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    countryMedalArr = input.slice(1).map((el) => el.split(" ").map(Number));

    saveTargetCountry();
    findRank();

    process.exit();
});

function saveTargetCountry() {
    for (let i = 0; i < countryMedalArr.length; i++) {
        if (K === countryMedalArr[i][0]) {
            targetCountry = countryMedalArr[i];
        }
    }
}

function findRank() {
    countryMedalArr.sort((a, b) => b[1] - a[1] || b[2] - a[2] || b[3] - a[3]);

    let rank = 1;

    for (let i = 0; i < countryMedalArr.length; i++) {
        if (
            countryMedalArr[i][1] === targetCountry[1] &&
            countryMedalArr[i][2] === targetCountry[2] &&
            countryMedalArr[i][3] === targetCountry[3]
        ) {
            console.log(rank);
            break;
        } else {
            rank += 1;
        }
    }
}
