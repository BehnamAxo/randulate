/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value for the random integer.
 * @param {number} max - The maximum value for the random integer.
 * @returns {number} A random integer within the specified range.
 */
const giveMeRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

module.exports = {
  giveMeRandomInt
}
