const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

rl.on('close', () => {
  /* eslint-disable-next-line */
  solve(lines);
});

function reverse(a) {
  let reverseResult = '';
  const strArray = Array.from(a[0]);
  for (let i = a[0].length - 1; i >= 0; i -= 1) {
    reverseResult += strArray[i];
  }
  return reverseResult;
}
function solve(input) {
  console.log(reverse(input) === input[0] ? 'True' : 'False');
}
