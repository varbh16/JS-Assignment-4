let a = parseInt(prompt("Enter a"));
let b = parseInt(prompt("Enter b"));
let c = parseInt(prompt("Enter c"));

let score = (3 * a) + b - (2 * c);

if (score < 0) {
  score = 0;
}

if ((a + b + c) > 50) {
  score = score - 10;
}

let status = "FAIL";
if (score >= 60) {
  status = "PASS";
}

alert(score + ", " + status);