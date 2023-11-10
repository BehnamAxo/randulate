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
 * Generates a random 3-digit number as a string with leading zeros if necessary.
 *
 * @returns {string} A random 3-digit number in the format 'XXX'.
 */
const giveMeThreeDigits = () => {
  const randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
  return String(randomNumber).padStart(3, '0');
}


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


module.exports = {
  generateObjectOrArray,
  generateUUID,
  getRandomElement,
  giveMeRandomInt,
  giveMeThreeDigits
}
