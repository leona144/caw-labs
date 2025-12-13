const notation = require('./notation.js');
const scores = [15,88,99,10,6];
const average = notation.mean(scores);
console.log(`Scores: [${scores}]`);
console.log(`average of scores: ${average}`);
