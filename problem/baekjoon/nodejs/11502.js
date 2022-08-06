const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let primeNum = [];

rl.on("line", function (line) {
  input.push(line);

  T = Number(input[0]);

  if (input.length - 1 === T) {
    rl.close();
  }
}).on("close", function () {
  let testCase = [];

  for (let i = 0; i < T; i++) {
    testCase[i] = Number(input[i + 1]);
  }

  FindPrimeNum();

  for (let i = 0; i < T; i++) {
    let finished = false;

    for (let j = 0; j < testCase[i]; j++) {
      for (let k = 0; k < testCase[i]; k++) {
        for (let l = 0; l < testCase[i]; l++) {
          if (primeNum[j] + primeNum[k] + primeNum[l] === testCase[i]) {
            finished = true;
            console.log(primeNum[j], primeNum[k], primeNum[l]);
            break;
          }
        }
        if (finished) {
          break;
        }
      }
      if (finished) {
        break;
      }
    }
    if (!finished) {
      console.log(0);
    }
  }

  process.exit();
});

// 1 ~ 1000 사이의 소수 구하기
function FindPrimeNum() {
  for (let i = 2; i <= 1000; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
      }
    }

    if (isPrime) {
      primeNum.push(i);
    }
  }

  return primeNum;
}
