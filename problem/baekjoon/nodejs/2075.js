const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// 입력 줄 수를 계산하기 위한 변수
let count = -1;
let N = 0;
let heap = [];

function calHeap(val) {
    // heap에는 최대 N개의 값만 들어가면 됨

    if (heap.length < N) {
        heap.push(val);

        // heapify up
        let index = heap.length - 1;

        while (index > 0) {
            let parent = Math.floor((index - 1) / 2);

            if (heap[index] >= heap[parent]) break;

            let temp = heap[index];
            heap[index] = heap[parent];
            heap[parent] = temp;

            index = parent;
        }
    } else {
        if (heap[0] >= val) return;

        heap[0] = val;

        // heapify down
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
    console.log(heap);

    process.exit();
});
