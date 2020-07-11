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

function TestUni(a) {
  if (a === 1) {
    return 'Composite';
  }
  for (let i = 2; i <= a; i += 1) {
    if (a % i === 0) {
      if (a !== i) {
        return 'Composite';
      }
      return 'Prime';
    }
  }
}

function solve(input) {
  const lineNum = Array.from(input, Number);
  for (let i = 1; i <= lineNum[0]; i += 1) {
    console.log(TestUni(lineNum[i]));
  }
}
