// 팩토리얼 0의 개수
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
inputs = Number(input);

function Factorial(num) {
  let answer = 0;

  while (num >= 5) {
    answer += parseInt(num / 5);
    num /= 5;
  }

  return answer;
}

console.log(Factorial(inputs));
