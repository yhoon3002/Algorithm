// 최소 힙
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];
let N;

rl.on("line", function (line) {
    input.push(line);

    N = Number(input[0]);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    let heap = [null];
    let answer = [];

    function insert(val) {
        heap.push(val);
        let cur = heap.length - 1;
        let parent = Math.floor(cur / 2);

        while (parent > 0 && heap[cur] < heap[parent]) {
            [heap[cur], heap[parent]] = [heap[parent], heap[cur]];
            cur = parent;
            parent = Math.floor(cur / 2);
        }
    }

    function remove() {
        if (heap.length <= 1) {
            answer.push(0);
            return;
        } else if (heap.length === 2) {
            answer.push(heap.pop());
            return;
        }

        const min = heap[1];
        heap[1] = heap.pop();

        let cur = 1;
        let left = cur * 2;
        let right = cur * 2 + 1;

        while (
            (heap[left] && heap[cur] > heap[left]) ||
            (heap[right] && heap[cur] > heap[right])
        ) {
            let smaller = right && heap[right] < heap[left] ? right : left;
            [heap[cur], heap[smaller]] = [heap[smaller], heap[cur]];
            cur = smaller;
            left = cur * 2;
            right = cur * 2 + 1;
        }

        answer.push(min);
    }

    for (let i = 1; i <= N; i++) {
        if (Number(input[i]) === 0) {
            remove();
        } else {
            insert(Number(input[i]));
        }
    }

    console.log(answer.join("\n"));

    process.exit();
});
