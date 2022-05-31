import {add,sub,mul,div,sin,cos,ten} from"./another.js"

const {
    randomInt
  } = await import('node:crypto');
  const n = randomInt(1,900000);
  console.log(`The dice rolled: ${n}`);
// console.log(uuid);
console.log(add(5,5),sub(6,5),mul(7,8),div(8,8),sin(30),cos(30),ten(30))