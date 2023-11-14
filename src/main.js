const person = require('./person');
const boolean = require('./boolean');


module.exports = {
  ...boolean,
  ...person
};
