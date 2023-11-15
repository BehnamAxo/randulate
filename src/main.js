const boolean = require('./boolean');
const datetime = require('./datetime');
const person = require('./person');


module.exports = {
  ...boolean,
  ...datetime,
  ...person
};
