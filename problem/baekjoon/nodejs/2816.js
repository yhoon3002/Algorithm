// 디지털 티비
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N = 0;
let input = [];
let currentArrow = 0;
let channelArr = [];
let answer = [];

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0]);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    channelArr = input.slice(1);

    findChannel();

    process.exit();
});

// 1. 화살표를 한 칸 아래로 내린다. (채널 i에서 i+1로)
function goArrowDown() {
    if (currentArrow < N - 1) {
        currentArrow += 1;

        answer.push("1");
    }
}

// 2. 화살표를 위로 한 칸 올린다. (채널 i에서 i-1로)
function goArrowUp() {
    if (currentArrow >= 1) {
        currentArrow -= 1;

        answer.push("2");
    }
}

// 3. 현재 선택한 채널을 한 칸 아래로 내린다. (채널 i와 i+1의 위치를 바꾼다. 화살표는 i+1을 가리키고 있는다)
function goChannelDown() {
    if (currentArrow < N - 1) {
        [channelArr[currentArrow], channelArr[currentArrow + 1]] = [
            channelArr[currentArrow + 1],
            channelArr[currentArrow],
        ];

        currentArrow += 1;

        answer.push("3");
    }
}

// 4. 현재 선택한 채널을 위로 한 칸 올린다. (채널 i와 i-1의 위치를 바꾼다. 화살표는 i-1을 가리키고 있다)
function goChannelUp() {
    if (currentArrow >= 1) {
        [channelArr[currentArrow], channelArr[currentArrow - 1]] = [
            channelArr[currentArrow - 1],
            channelArr[currentArrow],
        ];

        currentArrow -= 1;

        answer.push("4");
    }
}

function findChannel() {
    // 1단계. KBS1의 위치를 찾는다.
    let kbs1Index = channelArr.indexOf("KBS1");

    // 2단계. 커서를 KBS1의 위치까지 옮긴다. (이때 커서는 무조건 아래로밖에 내릴수밖에 없음.)
    while (currentArrow !== kbs1Index) {
        goArrowDown();
    }

    // 3단계. KBS1을 맨 위(0번째 인덱스)로 옮긴다.
    while (currentArrow !== 0) {
        goChannelUp();
    }

    // 4단계. KBS2의 위치를 찾는다.
    let kbs2index = channelArr.indexOf("KBS2");

    // 5단계. 커서를 KBS2의 위치까지 옮긴다.
    while (currentArrow !== kbs2index) {
        goArrowDown();
    }

    // 6단계. KBS2를 1번째 인덱스로 옮긴다.
    while (currentArrow !== 1) {
        goChannelUp();
    }

    // 7단계. 그동안 동작했던 숫자들을 출력할지 기록한다.
    console.log(answer.join(""));
}
