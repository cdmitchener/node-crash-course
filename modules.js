const xyz = require('./people');
//const {people} = require('./people');      ..... will import people object, but not age object

console.log(xyz);
console.log(xyz.people, xyz.ages);

const os = require('os');

console.log(os.platform(), os.homedir());