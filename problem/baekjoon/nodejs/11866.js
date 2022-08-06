const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력값 : 7, 3
let input = [];

rl.on("line", function (line) {
  input.push(line);

  N = Number(input[0].split(" ")[0]);
  K = Number(input[0].split(" ")[1]);

  rl.close();
}).on("close", function () {
  let answer = [];
  let arr = [];
  let arr2 = [];
  let index = K - 1;

  // 길이가 N인 배열에 1 ~ N까지 수 넣기
  for (let i = 0; i < N; i++) {
    arr[i] = i + 1;
  }

  while (answer.length !== N) {
    if (arr[index] > 2 * K) {
      arr2 = arr.concat(arr);
      // .filter((acc, cur) => arr.indexOf(acc) === cur);
    }

    answer.push(arr2[index]);
    answer.pop(arr2[index]);

    index = index + K;

    console.log(arr2);
  }

  // console.log(answer);
  process.exit();
});
