const colorNames = require('../lib/consts/colorName');
const {
  giveMeRandomInt,
  hexToRgb,
  interpolate,
  rgbToHex
} = require('./helper');


/**
 * Generates a random hexadecimal color code.
 *
 * @returns {string} A randomly generated hexadecimal color code (e.g., '#RRGGBB').
 */
const getHexColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}


/**
 * Generates a random color name from a predefined list.
 *
 * @returns {string} A randomly selected color name from the list.
 */
const getColorName = () => colorNames[giveMeRandomInt(0, colorNames.length - 1)];


/**
 * Interpolates between two hexadecimal colors based on a given percentage.
 *
 * @param {string} color1 - The first hexadecimal color code (e.g., '#RRGGBB').
 * @param {string} color2 - The second hexadecimal color code (e.g., '#RRGGBB').
 * @param {number} percentage - The interpolation percentage, a value between 0 and 100 where 0 represents the first color,
 * 100 represents the second color, and values in between represent a blend of the two colors.
 * @returns {string} The interpolated hexadecimal color code.
 */
const interpolateColor = (color1, color2, percentage) => {
  // Validate input percentage
  percentage = Math.max(0, Math.min(100, percentage));

  const color1Rgb = hexToRgb(color1);
  const color2Rgb = hexToRgb(color2);
  const interpolatedColor = interpolate(color1Rgb, color2Rgb, percentage / 100);

  return rgbToHex(interpolatedColor);
}


module.exports = {
  getColorName,
  getHexColor,
  interpolateColor
};
