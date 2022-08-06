const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);

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

  // 2차원 graph 초기화
  let graph = Array.from(Array(N), () => new Array(N).fill(0));

  // 간선 연결된거 1로 설정
  for (let i = 0; i < M; i++) {
    graph[compare[i][0] - 1][compare[i][1] - 1] = 1;
  }

  // 스택
  let stack = [];

  // 출력
  let answer = [];

  // 첫 스택에 들어갈 학생 구하기
  for (let i = 0; i < N; i++) {
    let start = false;

    for (let j = 0; j < N; j++) {
      if (graph[j][i] === 1) {
        start = true;
      }
    }

    if (!start) {
      stack.push(i + 1);
    }
  }

  // 학생들 줄 세우기
  answer.push(stack[0]);

  console.log(answer);
  process.exit();
});
