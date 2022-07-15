# Algorithm
This repository is for what i solved algorithm from Programmers and Baekjoon

<br/>

## How to use readline modules
```
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function(line) {
  input.push(line);
  
  //
  // this is for code for what i wanted to do by using input
  //
  
}).on("close", function() {
  
  //
  // this is for code for algorithm
  //
  
  console.log("this is for your answer");
  process.exit();
});
```

<br/>

## How to use fs modules
```
fs 모듈에 대해서 좀 더 공부후 업데이트 예정
```
