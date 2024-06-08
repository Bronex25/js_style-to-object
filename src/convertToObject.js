'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = sourceString
    .split(';')
    .filter((string) => string.trim().length > 0)
    .reduce((acc, value) => {
      const subArr = value.split(':');
      const key = subArr[0].trim();
      const prop = subArr[1].trim();

      acc[key] = prop;

      return acc;
    }, {});

  return result;
}

module.exports = convertToObject;
