const { add, multiply } = require('./math');

function main() {
  console.log('Sample Test Project');
  console.log('2 + 3 =', add(2, 3));
  console.log('4 × 5 =', multiply(4, 5));
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
};
