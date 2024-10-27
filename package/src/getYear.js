import { daysArray, getNextMonth, getPrevMonth, isLeap, monthMax } from './constants.js';
import getMonth from './getMonth.js';

/**
 * Get full year starting at any point
 * @param today 
 * @param leap 
 * @param yearIndex 
 * @returns Year
 */
export default function getYear(today) {
    const output = [];

    let yearIndex = today.getFullYear();
    let monthIndex = today.getMonth();
    let dayIndex = today.getDate();
    const originalIndex = monthIndex;
    let monthInput;
    let leap = isLeap(yearIndex);
    let maxIndex = monthMax(monthIndex, leap);
    let stringDay = daysArray[today.getDay()];

    // Going backwards
    while(monthIndex <= 11) {
        monthInput = getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay);
        output.push(monthInput);
        monthIndex++;
        stringDay = getNextMonth(monthInput.weeks, maxIndex);
        maxIndex = monthMax(monthIndex, leap);
        dayIndex = 1;
    }

    // Reset to original and start going backwards
    monthIndex = originalIndex - 1;
    maxIndex = monthMax(monthIndex, leap);
    dayIndex = monthMax(monthIndex, leap);
    stringDay = getPrevMonth(output[0].weeks)

    // Going forwards
    while(monthIndex >= 0) {
        monthInput = getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay);
        output.unshift(monthInput);
        monthIndex--;
        maxIndex = monthMax(monthIndex, leap);
        dayIndex = monthMax(monthIndex, leap);
        stringDay = getPrevMonth(monthInput.weeks)
    }
    return output;
}
