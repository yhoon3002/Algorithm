// 에디터
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N;

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[1]);

    if (input.length === N + 2) {
        rl.close();
    }
}).on("close", function () {
    let leftPointer = input[0].split("");
    let rightPointer = [];

    for (let i = 2; i < N + 2; i++) {
        let [command, value] = input[i].split(" ");

        switch (command) {
            case "L":
                // 커서를 왼쪽으로 한 칸 옮김(커서가 문장의 맨 앞이면 무시됨)
                // 커서를 왼쪽으로 옮기면 leftPointer에서 pop하고 rightPointer에 push
                if (leftPointer.length) {
                    rightPointer.push(leftPointer.pop());
                }
                break;
            case "D":
                // 커서를 오른쪽으로 한 칸 옮김(커서가 문장의 맨 뒤이면 무시됨)
                // 커서를 오른쪽으로 옮기면 rightPointer에서 pop하고 leftPointer에 push
                if (rightPointer.length) {
                    leftPointer.push(rightPointer.pop());
                }
                break;
            case "B":
                // 커서 왼쪽에 있는 문자를 삭제함(커서가 문장의 맨 앞이면 무시됨)
                // 삭제로 인해 커서는 한 칸 왼쪽으로 이동한 것처럼 나타나지만, 실제로 커서의 오른쪽에 있던 문자는 그대로임
                // leftPointer에서 pop
                if (leftPointer.length) {
                    leftPointer.pop();
                }
                break;
            case "P":
                // P 뒤의 문자를 커서 왼쪽에 추가함
                // leftPointer에 문자 push
                leftPointer.push(value);
                break;
        }
    }

    // leftPointer + Reversed rightPointer 합치기
    console.log(leftPointer.concat(rightPointer.reverse()).join(""));

    process.exit();
});
