const commonStreetNames = require('../lib/consts/commonStreetName');
const domains = require('../lib/consts/emailDomains');
const femaleFirstNames = require('../lib/consts/femaleFirstName');
const lastNames = require('../lib/consts/lastName');
const maleFirstNames = require('../lib/consts/maleFirstName');
const usCities  =require('../lib/consts/usCities');
const usStateAbbreviations = require('../lib/consts/usStateAbbreviation');
const {
  generateObjectOrArray,
  generateUUID,
  giveMeRandomInt,
  giveMeThreeDigits
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
const lastName = () => lastNames[giveMeRandomInt(0, lastNames.length - 1)];


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
const emailFromNames = (firstName, lastName, nameOrder = 'f') => {
  if (!firstName || !lastName) {
    throw new Error('Both first and last names are required.');
  }

  const randomInt = giveMeRandomInt(0, domains.length - 1);

  if (nameOrder === 'f') {
    return `${firstName}.${lastName}@${domains[randomInt]}`;
  } else if (nameOrder === 'l') {
    return `${lastName}.${firstName}@${domains[randomInt]}`;
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
const randomEmail = (gender) => {
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


/**
 * Generates an email address based on a name and a list of domains.
 *
 * @param {string} name - The name to create an email address from.
 * @returns {string} An email address in the format 'name@domain'.
 */
const emailByName = (name) => {
  const randomInt = giveMeRandomInt(0, domains.length - 1);
  return `${name.replace(/\s/g, '')}@${domains[randomInt]}`;
}


/**
 * Generates a random gender as either 'Female' or 'Male'.
 *
 * @returns {string} A randomly chosen gender, either 'Female' or 'Male'.
 */
const gender = () => Math.random() < 0.5 ? 'Female' : 'Male';


/**
 * Generates a random U.S. phone number in the format '(XXX) XXX-XXXX'.
 *
 * @returns {string} A random U.S. phone number in the specified format.
 */
const usPhoneNumber = () => {
  const areaCode = Math.floor(Math.random() * 800) + 200;
  const centralOfficeCode = Math.floor(Math.random() * 800);
  const lineNumber = Math.floor(Math.random() * 9000) + 1000;

  return `(${areaCode}) ${centralOfficeCode}-${lineNumber}`;
}


/**
 * Generates a random Social Security Number (SSN) in the format 'XXX-XXX-XXX'.
 *
 * @returns {string} A random SSN in the specified format.
 */
const SSN = () => `${giveMeThreeDigits()}-${giveMeThreeDigits()}-${giveMeThreeDigits()}`;


/**
 * Generates a random U.S. address in the format 'StreetNumber StreetName, City, State ZIP Code'.
 *
 * @returns {string} A random U.S. address in the specified format.
 */
const usAddress = () => {
  const city = usCities[Math.floor(Math.random() * usCities.length)];
  const state = usStateAbbreviations[Math.floor(Math.random() * usStateAbbreviations.length)];
  const streetName = commonStreetNames[Math.floor(Math.random() * commonStreetNames.length)];
  const streetNumber = Math.floor(Math.random() * 1000) + 1;
  const zipCode = Math.floor(Math.random() * 90000) + 10000;

  return `${streetNumber} ${streetName}, ${city}, ${state} ${zipCode}`;
}


/**
 * Generates a random person object with various properties.
 *
 * e.g: Randulate.person(['email', 'address']) or Randulate.person()
 *
 * @param {Array<string>} excludeProperties - An optional array of property names to be excluded from the generated person object.
 * @returns {object} A randomly generated person object with the following properties:
 *   - id (string): A version 4 UUID
 *   - phoneNumber (string): A randomly generated US phone number
 *   - gender (string): A randomly chosen gender, either 'Female' or 'Male'
 *   - name (string): A randomly generated name
 *   - ssn (number): A random Social Security Number
 *   - email (string): A randomly generated email based on the person's name
 *   - address (string): A randomly generated US address
 */
const person = (excludeProperties) => {
  const personName = name();
  const person = {
    id: generateUUID(),
    phoneNumber: usPhoneNumber(),
    gender: gender(),
    name: personName,
    ssn: SSN(),
    email: emailByName(personName),
    address: usAddress()
  };

  const personCopy = { ...person };
  return excludeProperties && excludeProperties.length
    ? (excludeProperties.forEach((prop) => delete personCopy[prop]), personCopy)
    : person;
};


module.exports = {
  SSN,
  emailByName,
  emailFromNames,
  firstName,
  firstNameObjectOrArray,
  gender,
  lastName,
  lastNameObjectOrArray,
  name,
  nameObjectOrArray,
  person,
  randomEmail,
  usAddress,
  usPhoneNumber
};
