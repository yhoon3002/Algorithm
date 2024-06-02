// 토너먼트
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  N = Number(input[0].split(" ")[0]);
  jimin = Number(input[0].split(" ")[1]);
  hansu = Number(input[0].split(" ")[2]);

  rl.close();
}).on("close", function () {
  let count = 1;

  for (let i = 0; i < N; i++) {
    if (Math.ceil(jimin / 2) === Math.ceil(hansu / 2)) {
      break;
    } else {
      jimin = Math.ceil(jimin / 2);
      hansu = Math.ceil(hansu / 2);
      count++;
    }
  }

  console.log(count);

  process.exit();
});
