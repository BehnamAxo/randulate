const countries = require('../lib/consts/countries');
const { filterByProperty } = require('./helper');


/**
 * Retrieves information about a specific country based on its name.
 *
 * @param {string} countryName - The name of the country to retrieve information for.
 * @returns {Object|null} An object containing details about the specified country, or null if the country is not found.
 */
const getCountryInfo = (countryName) => {
  const lowercaseCountryName = countryName.toLowerCase();

  return countries[
    Object.keys(countries).find(key => key.toLowerCase() === lowercaseCountryName)
  ] || null;
}


/**
 * Retrieves and returns an array containing the names of all countries.
 *
 * @returns {Array} An array of country names.
 */
const listAllCountries = () => Object.keys(countries);


/**
 * Calculates and returns the total approximate population of all countries.
 *
 * @returns {number} The total approximate population of all countries.
 */
const getTotalPopulation = () =>
  Object.values(countries).reduce(
    (previousValue, { approximatePopulation }) => previousValue + approximatePopulation,
    0
  );


/**
 * Retrieves countries based on their driving side and returns an array of their names.
 *
 * @param {string} side - The driving side to filter countries by ('Right' or 'Left').
 * @returns {Array} An array of country names with the specified driving side.
 */
const getCountriesByDrivingSide = (side) =>
  filterByProperty('drivingSide', drivingSide => drivingSide.toLowerCase() === side.toLowerCase(), countries);


/**
 * Retrieves countries with an area in mi² larger than a specified threshold and returns an array of their names.
 *
 * @param {number} thresholdArea - The minimum area in mi² required for a country to be included.
 * @returns {Array} An array of country names with an area larger than the specified threshold.
 */
const getCountriesWithLargerAreaThan = (thresholdArea) =>
  filterByProperty('area', area => area > thresholdArea, countries);


/**
 * Finds countries with a specified capital (case-insensitive) and returns an array of their names.
 *
 * @param {string} targetCapital - The capital to search for among the countries.
 * @returns {Array} An array of country names with the specified capital (case-insensitive).
 */
const findCountriesByCapital = (targetCapital) =>
  Object.entries(countries)
    .filter(([, { capital }]) => capital && capital.toLowerCase() === targetCapital.toLowerCase())
    .map(([countryName]) => countryName);


/**
 * Sorts countries by population in descending order and returns an array of country names.
 *
 * @returns {Array} An array of country names sorted by population in descending order.
 */
const sortCountriesByPopulation = () =>
  Object.entries(countries)
    .sort(([, a], [, b]) => b.approximatePopulation - a.approximatePopulation)
    .map(([countryName]) => countryName);


/**
 * Retrieves the name of the largest country by area in mi² from a collection of countries.
 *
 * @returns {string|null} The name of the largest country by area or null if the collection is empty.
 */
const getLargestCountryByArea = () =>
  Object.entries(countries)
    .reduce((largestCountry, [countryName, { area }]) =>
      area > largestCountry.area ? { name: countryName, area } : largestCountry,
      { name: '', area: 0 }
    ).name || null;


module.exports = {
  findCountriesByCapital,
  getCountriesWithLargerAreaThan,
  getCountriesByDrivingSide,
  getCountryInfo,
  getLargestCountryByArea,
  getTotalPopulation,
  listAllCountries,
  sortCountriesByPopulation
};
