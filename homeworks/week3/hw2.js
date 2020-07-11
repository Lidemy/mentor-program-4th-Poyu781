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

function countNum(a) {
  const newarr = Array.from(String(a), Number);
  let value = 0;
  for (let i = 0; i < newarr.length; i += 1) {
    /* eslint-disable-next-line */
    value += Math.pow(newarr[i], newarr.length);
  }
  return value;
}

function solve(input) {
  const tmp = input[0].split(' ');
  const tmpFirstNumber = Number(tmp[0]);
  const tmpLastNumber = Number(tmp[1]);
  for (let i = tmpFirstNumber; i <= tmpLastNumber; i += 1) {
    if (countNum(i) === i) {
      console.log(i);
    }
  }
}
