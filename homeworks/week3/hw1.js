const readline = require('readline');

const lines = [];
const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  lines.push(line);
});

function solve(input) {
  const tmp = input[0];
  let ans = '';
  for (let i = 1; i <= tmp; i += 1) {
    ans += '*';
    console.log(ans);
  }
}
rl.on('close', () => {
  solve(lines);
});
