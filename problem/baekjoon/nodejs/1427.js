// 소트인사이드
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

function SortA(num) {
  let splitNum = String(num).split("");
  return Number(splitNum.sort((a, b) => b - a).join(""));
}

console.log(SortA(input));
