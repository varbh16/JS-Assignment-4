let N = parseInt(prompt("Enter N"));
let K = parseInt(prompt("Enter K"));
let ans = -1;

for (let X = 0; X <= 100000; X++) {
  let num = N + X;
  if (num % K === 0) {
    let strNum = num + "";
    let isPal = true;
    let len = strNum.length;
    
    for (let i = 0; i < len / 2; i++) {
      if (strNum[i] !== strNum[len - 1 - i]) {
        isPal = false;
      }
    }
    
    if (isPal === true) {
      ans = X;
      break;
    }
  }
}
alert(ans);