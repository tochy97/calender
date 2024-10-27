import getYear from './getYear.js';

/**
 * Get all years starting from today
 * @param endYear
 * @returns Past
 */
export default function getPast(endYear) {
  return new Promise((resolve, reject) => {
    let output = [];
    let date = new Date();
    let startYear = date.getFullYear();
  
    while (startYear >= endYear) {
      // Add the new year in front of the existing array
      output = [...getYear(date), ...output];
      startYear--;
      date = new Date(startYear,1,1);
    }

    resolve(output);
  })
}
