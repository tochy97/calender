import { makeSunday, monthsArray } from './constants.js';
import getWeek from './getWeek.js';

/**
 * Get the month starting from the 1st day
 * @param maxIndex 
 * @param dayIndex 
 * @param monthIndex 
 * @param leap 
 * @param yearIndex 
 * @param stringDay 
 * @returns 
 */
export default function getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay) {

    const stringMonth = monthsArray[monthIndex];

    const output = {
        weeks: [],
        month: stringMonth,
        index: monthIndex,
        year: yearIndex,
        isLeap: leap
    };

    // Find index of 1st sunday for the month
    while (dayIndex > 1) {
        dayIndex -= 7;
    }
    [dayIndex, stringDay] = makeSunday(dayIndex, stringDay);

    let weekInput;
    while (dayIndex < maxIndex) {
        weekInput = getWeek(dayIndex, stringDay, maxIndex);
        // Check if the array is empty and if the 1st index has a valid day or if the last index has a valid day
        if (weekInput.days.length > 0 && (typeof weekInput.days[0]?.day !== "undefined" || typeof weekInput.days[6]?.day !== "undefined")) {
            output.weeks.push(weekInput);
        }
        dayIndex += 7;
    }
    return output;
}
