const femaleFirstNames = require('../lib/consts/femaleFirstName');
const lastNames = require('../lib/consts/lastName');
const maleFirstNames = require('../lib/consts/maleFirstName');
const {
  generateObjectOrArray,
  giveMeRandomInt
} = require('./helper');


/**
 * @param {number} gender - The gender value. Use 1 for male and 0 for female. (optional)
 *
 * @returns {string} A random first name
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
 * @returns {string} A random last name
 */
const lastName = () => lastNames[giveMeRandomInt(0, 1499)];


/**
 * @param {string} gender - The gender value. Use 1 for male and 0 for female.
 *
 * @returns {string} A random name
 */
const name = (gender) => `${firstName(gender)} ${lastName()}`;


/**
 * Generates an array or object of first names based on the specified gender and size.
 *
 * @param {string} gender - The gender for which first names should be generated. Use 1 for male and 0 for female
 * @param {boolean} isArray - If true, the function returns an array of first names; if false, it returns an object.
 * @param {number} size - The number of first names to generate.
 *
 * @returns {(string[] | Object)} An array of first names if isArray is true, or an object with key-value pairs if isArray is false.
 */
const firstNameObjectOrArray = (gender, isArray, size) =>
  generateObjectOrArray(() => firstName(gender), isArray, size);


/**
 * Generates an array or object of last names based on the specified gender and size.
 *
 * @param {boolean} isArray - If true, the function returns an array of last names; if false, it returns an object.
 * @param {number} size - The number of last names to generate.
 *
 * @returns {(string[] | Object)} An array of last names if isArray is true, or an object with key-value pairs if isArray is false.
 */
const lastNameObjectOrArray = (isArray, size) =>
  generateObjectOrArray(() => lastName(), isArray, size);


/**
 * Generates an array or object of names based on the specified gender and size.
 *
 * @param {string} gender - The gender for which names should be generated. Use 1 for male and 0 for female
 * @param {boolean} isArray - If true, the function returns an array of names; if false, it returns an object.
 * @param {number} size - The number of names to generate.
 *
 * @returns {(string[] | Object)} An array of names if isArray is true, or an object with key-value pairs if isArray is false.
 */
const nameObjectOrArray = (gender, isArray, size) =>
  generateObjectOrArray(() => name(gender), isArray, size);


module.exports = {
  firstName,
  firstNameObjectOrArray,
  lastName,
  lastNameObjectOrArray,
  name,
  nameObjectOrArray
};
