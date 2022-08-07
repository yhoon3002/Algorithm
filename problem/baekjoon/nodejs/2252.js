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

  // graph 초기화
  let graph = new Array();
  for (let i = 0; i <= N; i++) {
    graph.push(new Array());
  }

  let inDegree = Array(N + 1).fill(0);

  for (let i = 0; i < compare.length; i++) {
    inDegree[compare[i][1]]++;
    graph[compare[i][0]].push(compare[i][1]);
  }

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

    for (let i = 0; i < graph[temp].length; i++) {
      inDegree[graph[temp][i]]--;
    }

    for (let i = 1; i < inDegree.length; i++) {
      if (inDegree[i] === 0) {
        queue.push(i);

        inDegree[i] = -1;
      }
    }
  }

  console.log(answer.join(" "));

  process.exit();
});
