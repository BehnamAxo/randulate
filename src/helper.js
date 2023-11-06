/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value for the random integer.
 * @param {number} max - The maximum value for the random integer.
 * @returns {number} A random integer within the specified range.
 */
const giveMeRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;


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

module.exports = {
  generateObjectOrArray,
  giveMeRandomInt
}
