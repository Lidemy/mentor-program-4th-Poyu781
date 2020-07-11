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

function solve(input) {
  for (let i = 1; i <= Number(input[0]); i += 1) {
    /* global BigInt */
    const match = Array.from(input[i].split(' '), BigInt);
    const A = match[0] * match[2];
    const B = match[1] * match[2];
    if (A === B) {
      console.log('DRAW');
    } else if (A > B) {
      console.log('A');
    } else {
      console.log('B');
    }
  }
}
