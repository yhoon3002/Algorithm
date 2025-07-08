// N번째 큰 수
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 입력 줄 수를 계산하기 위한 변수
let count = -1;
let N = 0;
let heap = [null];

function calHeap(val) {
    // heap에는 최대 N개의 값만 들어가면 됨

    if (heap.length <= N) {
        heap.push(val);

        // heapify up
        let cur = heap.length - 1;

        while (cur > 1) {
            let parent = Math.floor(cur / 2);

            if (heap[cur] >= heap[parent]) break;

            let temp = heap[cur];
            heap[cur] = heap[parent];
            heap[parent] = temp;

            cur = parent;
        }
    } else {
        if (val <= heap[1]) return;
        heap[1] = val;

        // heapify down
        let cur = 1;
        const len = heap.length;

        while (true) {
            let left = cur * 2;
            let right = cur * 2 + 1;
            let smallest = cur;

            if (left < len && heap[left] < heap[smallest]) smallest = left;
            if (right < len && heap[right] < heap[smallest]) smallest = right;
            if (smallest === cur) break;

            let temp = heap[cur];
            heap[cur] = heap[smallest];
            heap[smallest] = temp;
            cur = smallest;
        }
    }
}

// 메모리 제한 때문에 주로 쓰던 방식인 배열에 저장하고 처리하는 방식이 아닌
// 한 줄씩 입력받고 바로 처리하는 방식을 사용해야 한다.
rl.on("line", function (line) {
    if (count === -1) {
        N = Number(line);
        count++;
        return;
    }

    line.split(" ").forEach((val) => {
        calHeap(Number(val));
    });

    count++;

    if (count === N) {
        rl.close();
    }
}).on("close", function () {
    console.log(heap[1]);

    process.exit();
});
