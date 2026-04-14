let L = parseInt(prompt("Enter L"));
let R = parseInt(prompt("Enter R"));
let K = parseInt(prompt("Enter K"));
let count = 0;

for (let x = L; x <= R; x++) {
  if (x % K === 0) {
    let strX = x + "";
    let hasZero = false;
    let sum = 0;
    
    for (let i = 0; i < strX.length; i++) {
      if (strX[i] === "0") {
        hasZero = true;
      }
      sum = sum + parseInt(strX[i]);
    }
    
    if (hasZero === false) {
      let isPrime = true;
      if (sum < 2) {
        isPrime = false;
      } else {
        for (let i = 2; i < sum; i++) {
          if (sum % i === 0) {
            isPrime = false;
          }
        }
      }
      if (isPrime === true) {
        count++;
      }
    }
  }
}
alert(count);