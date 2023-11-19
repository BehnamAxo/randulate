const boolean = require('./boolean');
const datetime = require('./datetime');
const person = require('./person');
const color = require('./color');
const country = require('./country');


module.exports = {
  ...boolean,
  ...color,
  ...country,
  ...datetime,
  ...person
};
