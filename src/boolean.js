const { logicGate } = require('./helper');


/**
 * Generates a random boolean value with a 50% chance of being true or false.
 *
 * @returns {boolean} A randomly generated boolean value.
 */
const randomBoolean = () => Math.random() < 0.5; // 50% chance of true, 50% chance of false


/**
 * Generates a random boolean value based on a specified probability of being true.
 *
 * @param {number} trueProbability - The probability of the result being true, a decimal between 0 and 1.
 * @returns {boolean} A randomly generated boolean value.
 */
const randomBooleanWithProbability = (trueProbability) => Math.random() < trueProbability;


/**
 * Generates an array of random boolean values.
 *
 * @param {number} length - The length of the boolean array to generate.
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanArray = (length) => {
  const booleanArray = [];
  for (let i = 0; i < length; i++) {
    booleanArray.push(randomBoolean());
  }

  return booleanArray;
}


/**
 * Generates a sequence of random boolean values based on a specified probability of being true.
 *
 * @param {number} length - The length of the boolean sequence to generate.
 * @param {number} trueProbability - The probability of each value being true, a decimal between 0 and 1.
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanSequence = (length, trueProbability) => {
  const booleanArray = [];
  for (let i = 0; i < length; i++) {
    if (Math.random() < trueProbability) {
      booleanArray.push(true);
    } else {
      booleanArray.push(false);
    }
  }

  return booleanArray;
}


/**
 * Generates an array of random boolean values with at least one true value.
 *
 * @param {number} length - The length of the boolean array to generate (minimum length is 1).
 * @returns {Array<boolean>} An array of randomly generated boolean values.
 */
const randomBooleanWithCondition = (length) => {
  const booleanArray = [true]; // Ensure at least one true
  for (let i = 1; i < length; i++) {
    booleanArray.push(randomBoolean());
  }

  return booleanArray;
}


/**
 * Generates a weighted random boolean value.
 *
 * @param {number} trueWeight - The weight assigned to the `true` value.
 * @param {number} falseWeight - The weight assigned to the `false` value.
 *
 * @returns {boolean} Returns a boolean, either `true` or `false`, based on the specified weights.
 *
 * @example
 * // Example 1: Equal Weights (50% chance of true, 50% chance of false)
 * const result1 = weightedRandomBoolean(1, 1);
 * console.log(result1); // Output will be either true or false randomly
 *
 * // Example 2: Higher Weight for True (75% chance of true, 25% chance of false)
 * const result2 = weightedRandomBoolean(3, 1);
 * console.log(result2); // Output will be true more often
 *
 * // Example 3: Higher Weight for False (25% chance of true, 75% chance of false)
 * const result3 = weightedRandomBoolean(1, 3);
 * console.log(result3); // Output will be false more often
 */
const weightedRandomBoolean = (trueWeight, falseWeight) => {
  const totalWeight = trueWeight + falseWeight;
  const randomValue = Math.random() * totalWeight;
  if (randomValue < trueWeight) {
    return true;
  } else {
    return false;
  }
}


/**
 * Generates a random boolean matrix with the specified number of rows and columns.
 *
 * @param {number} rows - The number of rows in the matrix.
 * @param {number} columns - The number of columns in the matrix.
 *
 * @returns {Array<Array<boolean>>} - A 2D array representing the random boolean matrix.
 *
 * @example
 *
 * const randomMatrix = generateRandomBooleanMatrix(3, 3);
 * const randomMatrix = generateRandomBooleanMatrix(10, 10);
 */
const generateRandomBooleanMatrix = (rows, columns) => {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < columns; j++) {
      row.push(randomBoolean());
    }
    matrix.push(row);
  }

  return matrix;
}


/**
 * Performs a binary logic operation on two boolean values based on the specified operation.
 *
 * @param {boolean} value1 - The first boolean value.
 * @param {boolean} value2 - The second boolean value.
 * @param {string} operation - The logic operation to be performed.
 *   Possible values: 'AND', 'OR', 'NOT', 'NAND', 'NOR', 'XOR', 'XNOR'.
 *
 * @returns {?boolean} - The result of the binary logic operation.
 *   Returns null if an invalid operation is provided.
 *
 * @example
 * const result1 = binaryLogicOperation(true, false, 'AND');
 * const result2 = binaryLogicOperation(true, false, 'OR');
 * const result3 = binaryLogicOperation(true, null, 'NOT');
 *
 * console.log(result1); // Output: false
 * console.log(result2); // Output: true
 * console.log(result3); // Output: false
 */
const binaryLogicOperation = (value1, value2, operation) => {
  switch (operation) {
    case logicGate.AND:
      return value1 && value2;

    case logicGate.OR:
      return value1 || value2;

    case logicGate.NOT:
      return !value1;

    case logicGate.NAND:
      return !(value1 && value2);

    case logicGate.NOR:
      return !(value1 || value2);

    case logicGate.XOR:
      return (value1 || value2) && !(value1 && value2);

    case logicGate.XNOR:
      return !(value1 || value2) || (value1 && value2);

    default:
      return null;
  }
}


/**
 * Generates a sequence of boolean values alternating between true and false based on the specified length.
 *
 * @param {number} length - The length of the boolean sequence to generate. Must be a positive integer.
 * @returns {Array} An array containing boolean values that alternate between true and false.
 *                  Returns undefined if the provided length is not a valid positive integer.
 */
const booleanFlipFlop = (length) => {
  if (!Number.isInteger(length) || length <= 0) {
    console.error('Please provide a valid positive integer for the length.');

    return;
  }

  const array = [];

  for (i = 0; i < length; i++) {
    array.push(i % 2 === 0);
  }

  return array;
}


module.exports = {
  binaryLogicOperation,
  booleanFlipFlop,
  generateRandomBooleanMatrix,
  randomBoolean,
  randomBooleanArray,
  randomBooleanSequence,
  randomBooleanWithCondition,
  randomBooleanWithProbability,
  weightedRandomBoolean
};
