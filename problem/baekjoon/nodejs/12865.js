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
  let dp = Array.from(new Array(N + 1), () => Array(K + 1).fill(0));
  let arr = [];

  for (let i = 1; i <= N; i++) {
    arr[i - 1] = input[i].split(" ").map((el) => {
      return Number(el);
    });
  }

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      if (j - arr[i - 1][0] >= 0) {
        dp[i][j] = Math.max(
          dp[i - 1][j],
          arr[i - 1][1] + dp[i - 1][j - arr[i - 1][0]]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  console.log(dp[N][K]);

  process.exit();
});
