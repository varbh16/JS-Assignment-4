let N = parseInt(prompt("Enter N"));
let seed = parseInt(prompt("Enter seed"));

let sum = 0;
let m = 0;
let div = seed + 2;

while (sum < N) {
  m = m + 1;
  if (m % div !== 0) {
    sum = sum + m;
  }
}

alert(m + " " + sum);