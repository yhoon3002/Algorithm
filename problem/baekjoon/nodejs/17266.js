// 어두운 굴다리
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
    input.push(line.trim());

    if (input.length === 3) {
        rl.close();
    }
}).on("close", function () {
    input = input.map((el) => el.split(" ").map((el) => Number(el)));

    let [bridgeLength, bridgeNumber, bridgeLocation] = input;
    let possibleHeight = [];

    if (bridgeLocation.length === 1) {
        possibleHeight.push(bridgeLocation[0]);
        possibleHeight.push(bridgeLength[0] - bridgeLocation[0]);
    } else {
        possibleHeight.push(bridgeLocation[0]);
        possibleHeight.push(bridgeLength - bridgeLocation[bridgeNumber - 1]);

        for (let i = 1; i < bridgeNumber; i++) {
            possibleHeight.push(
                Math.ceil((bridgeLocation[i] - bridgeLocation[i - 1]) / 2)
            );
        }
    }

    console.log(Math.max(...possibleHeight));

    process.exit();
});
