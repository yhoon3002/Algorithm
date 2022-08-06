function solution(s) {
  let answer = [];
  let sLength = s.length;

  if (s.length === 0) {
    return 0;
  } else if (s.length === 1) {
    return 1;
  } else {
    for (let i = 1; i <= parseInt(sLength / 2); i++) {
      let prev = s.slice(0, i);
      let count = 1;
      let reducedS = "";

      let tempI = i;
      let tempJ = 2 * i;
      let temp = "";

      for (let j = i; j < s.length; j += i) {
        temp = s.slice(tempI, tempJ);

        tempI += i;
        tempJ += i;

        if (prev === temp) {
          count++;
        } else {
          if (count === 1) {
            reducedS += "" + prev;
            prev = temp;
            count = 1;
          } else if (count > 1) {
            reducedS += count + prev;
            prev = temp;
            count = 1;
          }
        }
      }
      if (count === 1) {
        reducedS += "" + prev;
      } else if (count > 1) {
        reducedS += count + prev;
      }
      answer.push(reducedS.length);
    }
  }
  return Math.min(...answer);
}
