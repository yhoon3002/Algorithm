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

  if (input.length - 1 === N) {
    rl.close();
  }
}).on("close", function () {
  let haveCoins = [];
  let count = 0;

  haveCoins = input.slice(1).map((el) => {
    return Number(el);
  });

  let nowAmount = K;

  for (let i = N - 1; i >= 0; i--) {
    if (parseInt(nowAmount / haveCoins[i]) === 0) {
      continue;
    } else {
      if (nowAmount === 0) {
        break;
      }

      let amount = parseInt(nowAmount / haveCoins[i]);
      count += amount;
      nowAmount = nowAmount % haveCoins[i];
    }
  }

  console.log(count);
  process.exit();
});
