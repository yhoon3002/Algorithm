// 크로스 컨트리
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let T = 0;

rl.on("line", function (line) {
    input.push(line.trim());

    T = Number(input[0]);

    if (input.length === T * 2 + 1) {
        rl.close();
    }
}).on("close", function () {
    input = input.map((el) => el.split(" ").map((el) => Number(el))).slice(1);

    for (let i = 0; i < T; i++) {
        calWinner();
    }

    process.exit();
});

function calWinner() {
    let tempGame = input.splice(0, 2);
    let teamCount = tempGame[0][0];
    let game = tempGame[1];

    let countArr = [];
    let validTeam = [];
    let validScore = [];

    let sumOfScore = [];
    let count = [];
    let fifthMember = [];

    // 1. 팀원이 6명안되면 없애기.
    // 각 전체 팀원 count하기
    for (let i = 0; i < game.length; i++) {
        if (countArr[game[i] - 1] === undefined) {
            countArr[game[i] - 1] = 1;
        } else {
            countArr[game[i] - 1] += 1;
        }
    }

    // 유효한 팀만(팀원이 6명 이상인 팀만) 재기록하기
    for (let i = 0; i < countArr.length; i++) {
        if (countArr[i] >= 6) {
            validTeam.push(i + 1);
        }
    }

    // 재기록한 팀을 참조해서 유효한 점수만 재기록하기
    validScore = game.filter((el) => validTeam.includes(el));

    // 재기록한 점수를 참조해서 4등까지의 점수를 구하기.
    for (let i = 0; i < validScore.length; i++) {
        if (
            sumOfScore[validScore[i] - 1] === undefined ||
            count[validScore[i] - 1] === undefined
        ) {
            sumOfScore[validScore[i] - 1] = i + 1;
            count[validScore[i] - 1] = 1;
        } else {
            if (count[validScore[i] - 1] < 4) {
                sumOfScore[validScore[i] - 1] += i + 1;
                count[validScore[i] - 1] += 1;
            } else if (count[validScore[i] - 1] === 4) {
                // 5등으로 들어오는 팀 순서대로 기록하기
                if (!fifthMember.includes(validScore[i] - 1)) {
                    fifthMember.push(validScore[i] - 1);
                }
                count[validScore[i] - 1] += 1;
            } else {
                count[validScore[i] - 1] += 1;
            }
        }
    }

    // 제일 낮은 팀점수 구하기
    let minTeamScore = Math.min(...sumOfScore.filter((el) => el !== undefined));
    let minScoreCount = 0;
    // 제일 낮은 팀점수가 겹치는지 확인하기
    for (let i = 0; i < sumOfScore.length; i++) {
        if (sumOfScore[i] === minTeamScore) {
            minScoreCount++;
        }
    }

    // 겹치지 않았을 때랑 겹쳤을 때의 결과 분기처리
    if (minScoreCount > 1) {
        for (let i = 0; i < fifthMember.length; i++) {
            if (sumOfScore[fifthMember[i]] === minTeamScore) {
                console.log(fifthMember[i] + 1);
                break;
            }
        }
    } else {
        console.log(sumOfScore.indexOf(minTeamScore) + 1);
    }
}
