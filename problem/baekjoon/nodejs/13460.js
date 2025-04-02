const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let count = 0;

rl.on("line", function (line) {
  input.push(line);

  N = Number(input[0].split(" ")[0]);
  M = Number(input[0].split(" ")[1]);

  if (input.length - 1 === N) {
    rl.close();
  }
}).on("close", function () {
    let tempArr = input.slice(1).map((el) => el.split(""));

    goUp(tempArr);
    
    process.exit();
});

// 위로 뒤집었을 때
function goUp(tempArr) {

    // R의 현재 위치
    const rL = [];
    tempArr.map((row, rowIndex) => row.map((col, colIndex) => col === "R" && rL.push(rowIndex, colIndex)));

    // R의 경우
    // R의 현재 위치에서 위로 이동 했을 때 #을 만났을때 까지 계속 위로
    

    // B의 경우

    console.log("RL", rL);
}

// 오른쪽으로 뒤집었을 때
function goRight() {}

// 아래로 뒤집었을 때
function goDown() {}

// 왼쪽으로 뒤집었을 때
function goLeft() {}