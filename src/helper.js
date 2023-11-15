const crypto = require('crypto');

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value for the random integer.
 * @param {number} max - The maximum value for the random integer.
 * @returns {number} A random integer within the specified range.
 */
const giveMeRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


/**
 * Generates a random number with a specified number of digits.
 *
 * @param {number} numDigits - The number of digits for the generated random number.
 * @returns {string} A string representing a random number with the specified number of digits.
 */
const generateRandomNumber = (numDigits) => {
  const min = 10 ** (numDigits - 1);
  const max = (10 ** numDigits) - 1;
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  return String(randomNumber).padStart(numDigits, '0');
};


/**
 * Generates an array or object based on a provided generator function.
 *
 * @param {Function} generator - A function that generates individual values to populate the resulting array or object.
 * @param {boolean} isArray - A boolean flag indicating the output format. If true, an array is returned; if false, an object is returned.
 * @param {number} size - An integer specifying the number of elements to be generated.
 * @returns {Array | Object} - An array or object containing the generated values, based on the isArray flag.
 */
const generateObjectOrArray = (generator, isArray, size) => {
  const dataArray = Array.from({ length: size }, generator);

  if (isArray) {
    return dataArray;
  } else {
    return dataArray.reduce((obj, currentValue, index) => {
      obj[`name${index + 1}`] = currentValue;
      return obj;
    }, {});
  }
};


/**
 * Generates a version 4 UUID (Universally Unique Identifier) based on random bytes.
 *
 * @returns {string} A version 4 UUID in string format.
 */
const generateUUID = () => {
  /**
   * Generate 16 random bytes to form the UUID.
   * @type {Buffer}
   */
  const bytes = crypto.randomBytes(16);

  // Set the version (4) and variant (2)
  // `0x40` sets the 7th byte to '01000000'
  // `0x80` sets the 9th byte to '10000000'
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  /**
   * Convert the random bytes to a UUID string.
   * @type {string}
   */
  const uuid = bytes.toString('hex', 0, 16);

  return uuid;
}


/**
 * Returns a random element from the given array.
 *
 * @param {Array} array - The array from which to select a random element.
 * @returns {*} - A random element from the input array.
 */
const getRandomElement = (array) => {
  const randomInt = giveMeRandomInt(0, array.length - 1);

  return array[randomInt];
};


/**
 * Returns an array of time units, each represented as an object with a label and the corresponding duration in milliseconds.
 *
 * @returns {Array} An array of time units.
 */
const getTimeUnits = () => {
  return [
    // 365.25 days per year - 24 hours per day - 60 minutes per hour - 60 seconds per minute -1000 milliseconds per second
    { label: 'year', ms: 365.25 * 24 * 60 * 60 * 1000 },
    { label: 'month', ms: 30.44 * 24 * 60 * 60 * 1000 },
    { label: 'day', ms: 24 * 60 * 60 * 1000 },
    { label: 'hour', ms: 60 * 60 * 1000 },
    { label: 'minute', ms: 60 * 1000 },
    { label: 'second', ms: 1000 },
  ];
}


/**
 * Calculates the age difference in milliseconds between the current date and the provided date of birth.
 *
 * @param {string} dateOfBirth - The date of birth in either 'YYYY-MM-DD' or 'MM-DD-YYYY' format.
 * @returns {number} The age difference in milliseconds.
 *
 * @example
 * // Example: Pass a date of birth in either 'YYYY-MM-DD' or 'MM-DD-YYYY' format
 * const customDateOfBirth1 = '1990-01-12';
 * const customDateOfBirth2 = '01-12-1990';
 * calculateAgeInMilliseconds(customDateOfBirth1); // Example with 'YYYY-MM-DD' format
 * calculateAgeInMilliseconds(customDateOfBirth2); // Example with 'MM-DD-YYYY' format
 */
function calculateAgeInMilliseconds(dateOfBirth) {
  let dob = new Date(dateOfBirth);
  if (isNaN(dob.getTime())) {
    const parts = dateOfBirth.split('-');
    dob = new Date(parts[2], parts[0] - 1, parts[1]);
  }
  const currentDate = new Date();
  const timeDifference = currentDate - dob;

  return timeDifference;
}


module.exports = {
  calculateAgeInMilliseconds,
  generateObjectOrArray,
  generateRandomNumber,
  generateUUID,
  getRandomElement,
  getTimeUnits,
  giveMeRandomInt
  // giveMeThreeDigits
}
