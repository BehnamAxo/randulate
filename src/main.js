const femaleFirstName = require('../lib/consts/femaleFirstName');
const lastName = require('../lib/consts/lastName');
const maleFirstName = require('../lib/consts/maleFirstName');
const { giveMeRandomInt } = require('./helper');

function Randulate() {
  /**
   * @param {gender} - The gender value. Use 1 for male and 0 for female.
   * @returns {firstName} A random first name
   */
  this.firstName = (gender) => {
    const int = giveMeRandomInt(0, 1499);

    if (gender === 1) {
      return maleFirstName[int];
    } else if (gender === 0) {
      return femaleFirstName[int];
    }

    return giveMeRandomInt(0, 1) === 1 ? maleFirstName[int] : femaleFirstName[int];
  }

  /**
   * @returns {lastName} A random last name
   */
  this.lastName = () => {
    const int = giveMeRandomInt(0, 1499);
    return lastName[int];
  }

  /**
   * @param {gender} - The gender value. Use 1 for male and 0 for female.
   * @returns {firstName} A random name
   */
  this.name = (gender) => `${this.firstName(gender)} ${this.lastName()}`;
}

module.exports = new Randulate();
