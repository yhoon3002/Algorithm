const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  N = Number(input[0].split(" ")[0]);
  K = Number(input[0].split(" ")[1]);

  rl.close();
}).on("close", function () {
  console.log(N, K);
  process.exit();
});
