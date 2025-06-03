// 영단어 암기는 괴로워
// 백준에서는 통과 X
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M;
let input = [];

rl.on("line", function (line) {
    input.push(line);

    [N, M] = input[0].split(" ").map(Number);

    if (input.length === N + 1) {
        rl.close();
    }
}).on("close", function () {
    makeWord();

    process.exit();
});

function makeWord() {
    let freqMap = new Map();

    input = input.slice(1).filter((el) => el.length >= M);

    for (const char of input) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    const sorted = [...freqMap.entries()].sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        if (b[0].length !== a[0].length) return b[0].length - a[0].length;
        return a[0].localeCompare(b[0]);
    });

    sorted.map((el) => console.log(el[0]));
}

// 백준에서는 통과 O
// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const [N, M] = input[0].split(" ").map(Number);
// const words = input.slice(1);

// const freqMap = new Map();

// for (const word of words) {
//     if (word.length >= M) {
//         freqMap.set(word, (freqMap.get(word) || 0) + 1);
//     }
// }

// const sorted = [...freqMap.entries()].sort((a, b) => {
//     if (b[1] !== a[1]) return b[1] - a[1];
//     if (b[0].length !== a[0].length) return b[0].length - a[0].length;
//     return a[0].localeCompare(b[0]);
// });

// console.log(sorted.map(([word]) => word).join("\n"));
