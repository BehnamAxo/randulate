const boolean = require('./boolean');
const datetime = require('./datetime');
const person = require('./person');
const color = require('./color');


module.exports = {
  ...boolean,
  ...color,
  ...datetime,
  ...person
};
