const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let N = 0;
let M = 0;

rl.on("line", function (line) {
  input.push(line);
  N = Number(input[0].split(" ")[0]);
  M = Number(input[0].split(" ")[1]);
  if (N + M === input.length - 1) {
    rl.close();
  }
}).on("close", function () {
  let Ns = input.slice(1, N + 1);
  let Ms = input.slice(N + 1);
  let answer = [[]];
  let slicedArr = [];

  for (let i = 0; i < M; i++) {
    slicedArr = Ns.slice(
      Number(Ms[i].split(" ")[0]) - 1,
      Number(Ms[i].split(" ")[1])
    ).map((el) => Number(el));

    answer.push(Math.min(...slicedArr));
    answer.push(Math.max(...slicedArr));
  }

  console.log(answer);
  process.exit();
});
