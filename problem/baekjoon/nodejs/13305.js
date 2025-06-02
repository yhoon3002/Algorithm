// 주유소
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line);

    if (input.length === 3) {
        rl.close();
    }
}).on("close", function () {
    input = input.map((el) => el.split(" ").map((el) => Number(el)));

    calPrice();

    process.exit();
});

function calPrice() {
    let [N, road, price] = input;
    let totalPrice = BigInt(0);

    let minPrice = price[0];

    for (let i = 0; i < N - 1; i++) {
        if (minPrice <= price[i]) {
            totalPrice += BigInt(minPrice * road[i]);
        } else if (minPrice > price[i]) {
            minPrice = price[i];
            totalPrice += BigInt(minPrice * road[i]);
        }
    }

    console.log(String(totalPrice));
}
