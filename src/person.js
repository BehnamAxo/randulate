const domains = require('../lib/consts/emailDomains');
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
  const int = giveMeRandomInt(0, maleFirstNames.length - 1);

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
 * @param {string} gender - The gender value. Use 1 for male and 0 for female. (optional)
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


/**
 * Creates an email address from the given first and last names.
 *
 * @param {string} firstName - The first name.
 * @param {string} lastName - The last name.
 * @param {string} [nameOrder='f'] - The order in which the first and last names should be used ('f' for firstName first or 'l' for lastName first).
 *
 * @throws {Error} Throws an error if either first name or last name is missing, or if an invalid 'nameOrder' value is provided.
 *
 * @returns {string} The generated email address.
 */
const createEmailFromNames = (firstName, lastName, nameOrder = 'f') => {
  if (!firstName || !lastName) {
    throw new Error('Both first and last names are required.');
  }

  if (nameOrder === 'f') {
    return `${firstName}.${lastName}@gmail.com`;
  } else if (nameOrder === 'l') {
    return `${lastName}.${firstName}@gmail.com`;
  } else {
    throw new Error('Invalid "nameOrder" value. Use "f" or "l".');
  }
}


/**
 * Generates a random email address based on optional gender-specific names.
 *
 * @param {string} [gender] - An optional parameter representing the gender. Use 1 for male and 0 for female.
 *
 * @throws {Error} Throws an error if an invalid gender value is provided.
 *
 * @returns {string} The generated random email address.
 */
const createRandomEmail = (gender) => {
  const randomInt = giveMeRandomInt(0, domains.length - 1);
  const randomName = {
    firstName: firstName(gender).replace(/\s/g, ''),
    lastName: lastName().replace(/\s/g, '')
  };

  const email = Math.random() < 0.5
    ? `${randomName.firstName}.${randomName.lastName}@${domains[randomInt]}`
    : `${randomName.lastName}.${randomName.firstName}@${domains[randomInt]}`;

  return email;
}


module.exports = {
  createEmailFromNames,
  createRandomEmail,
  firstName,
  firstNameObjectOrArray,
  lastName,
  lastNameObjectOrArray,
  name,
  nameObjectOrArray
};