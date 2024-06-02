// DFS와 BFS
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

let graph = [];
let visitedDFS = [];
let visitedBFS = [];
let graphDFS = [];
let graphBFS = [];

rl.on("line", function (line) {
  input.push(line);

  // N : 정점의 개수
  N = Number(input[0].split(" ")[0]);
  // M : 간선의 개수
  M = Number(input[0].split(" ")[1]);
  // V : 정점의 번호
  V = Number(input[0].split(" ")[2]);

  if (input.length - 1 === M) {
    rl.close();
  }
}).on("close", function () {
  // 입력값 2번째줄 ~ 초기화
  let connected = [];

  // 입력값 설정
  for (let i = 0; i < M; i++) {
    connected[i] = input[i + 1].split(" ").map((el) => {
      return Number(el);
    });
  }

  // 그래프 초기화
  graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));

  // 양방향 그래프, 연결된 노드 1로 설정
  for (let i = 0; i < N; i++) {
    graph[connected[i][0]][connected[i][1]] = 1;
    graph[connected[i][1]][connected[i][0]] = 1;
  }

  visitedDFS = new Array(N + 1).fill(false);
  visitedBFS = new Array(N + 1).fill(false);

  DFS(V);
  BFS(V);

  console.log(
    graphDFS
      .map((el) => {
        return Number(el);
      })
      .join(" ")
  );

  console.log(
    graphBFS
      .map((el) => {
        return Number(el);
      })
      .join(" ")
  );

  process.exit();
});

function DFS(V) {
  // 노드 방문하면 true로 설정
  visitedDFS[V] = true;

  graphDFS.push(V);
  for (let i = 1; i < graph.length; i++) {
    // graph에 1이 있고 방문하지 않았다면 재귀 호출
    if (graph[V][i] === 1 && visitedDFS[i] === false) {
      DFS(i);
    }
  }
}

function BFS(V) {
  let queue = [];
  // 시작노드 큐에 삽입
  queue.push(V);
  // 시작노드 방문 처리
  graphBFS.push(V);

  while (queue.length !== 0) {
    let deQueue = queue.shift();
    visitedBFS[deQueue] = true;

    for (let i = 1; i < graph.length; i++) {
      if (graph[deQueue][i] === 1 && visitedBFS[i] === false) {
        visitedBFS[i] = true;
        queue.push(i);
        graphBFS.push(i);
      }
    }
  }
}
