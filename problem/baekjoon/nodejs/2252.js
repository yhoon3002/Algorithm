const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

  // N : 학생의 수, M : 비교한 횟수
  [N, M] = input[0].split(" ").map((el) => {
    return Number(el);
  });

  if (input.length - 1 === M) {
    rl.close();
  }
}).on("close", function () {
  // 키를 비교한 두 학생의 번호 A, B
  let compare = [];

  for (let i = 0; i < M; i++) {
    compare[i] = input[i + 1].split(" ").map((el) => {
      return Number(el);
    });
  }

  let graph = Array(N + 1).fill([]); // [[], [], [], [], []]
  let inDegree = Array(N + 1).fill(0); // [0, 0, 0, 0, 0]

  for (let i = 0; i < compare.length; i++) {
    inDegree[compare[i][1]]++;
    graph[compare[i][0]] = compare[i][1];
  }
  // [ [], [], [], 1, 2 ] [ 0, 1, 1, 0, 0 ]

  let answer = [];
  let queue = [];

  for (let i = 1; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i);

      inDegree[i] = -1;
    }
  }

  while (queue.length > 0) {
    let temp = queue.shift();
    answer.push(temp);

    inDegree[graph[temp]]--;

    for (let i = 1; i < inDegree.length; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);

        inDegree[i] = -1;
      }
    }
  }

  console.log(answer);

  process.exit();
});
