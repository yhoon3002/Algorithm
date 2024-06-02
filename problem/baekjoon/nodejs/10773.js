// 제로
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  K = Number(input[0]);

  if (input.length - 1 === K) {
    rl.close();
  }
}).on("close", function () {
  let answer = [];

  Ks = input.slice(1).map((el) => {
    return Number(el);
  });

  for (let i = 0; i < Ks.length; i++) {
    if (Ks[i] !== 0) {
      answer.push(Ks[i]);
    } else {
      answer.pop(answer[answer.length - 1]);
    }
  }

  if (answer.length === 0) {
    console.log(0);
  } else {
    console.log(
      answer.reduce((acc, cur) => {
        return acc + cur;
      })
    );
  }

  process.exit();
});
