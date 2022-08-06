function solution(nums) {
  let answer = 0;

  let sum = [];

  // nums에 있는 숫자들 중 서로 다른 3개를 골라 더하기
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = 1; j < nums.length - 1; j++) {
      for (let k = 2; k < nums.length; k++) {
        if (
          nums[i] !== nums[j] &&
          nums[j] !== nums[k] &&
          nums[i] !== nums[k] &&
          i < j &&
          j < k &&
          i < k
        ) {
          sum.push(nums[i] + nums[j] + nums[k]);
        }
      }
    }
  }

  // sum의 숫자들 중 소수 개수 구하기
  for (let i = 0; i < sum.length; i++) {
    let isPrime = false;

    if (sum[i] === 2) {
      answer++;
    }

    for (let j = 2; j < sum[i]; j++) {
      if (sum[i] % j === 0) {
        isPrime = true;
      }
    }

    if (!isPrime) {
      answer++;
    }
  }

  return answer;
}
