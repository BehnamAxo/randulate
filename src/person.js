const femaleFirstNames = require('../lib/consts/femaleFirstName');
const lastNames = require('../lib/consts/lastName');
const maleFirstNames = require('../lib/consts/maleFirstName');
const { giveMeRandomInt } = require('./helper');


/**
 * @param {gender} - The gender value. Use 1 for male and 0 for female.
 * @returns {firstName} A random first name
 */
const firstName = (gender) => {
  const int = giveMeRandomInt(0, 1499);

  if (gender === 1) {
    return maleFirstNames[int];
  } else if (gender === 0) {
    return femaleFirstNames[int];
  }

  return giveMeRandomInt(0, 1) === 1 ? maleFirstNames[int] : femaleFirstNames[int];
}

/**
 * @returns {lastName} A random last name
 */
const lastName = () => lastNames[giveMeRandomInt(0, 1499)];

/**
 * @param {gender} - The gender value. Use 1 for male and 0 for female.
 * @returns {firstName} A random name
 */
const name = (gender) => `${firstName(gender)} ${lastName()}`;


module.exports = {
  firstName,
  lastName,
  name
};
