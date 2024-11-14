import { daysArray } from './constants.js';

/**
 * Get this week
 * @param dayIndex 
 * @param stringDay 
 * @param monthMaxIndex 
 * @returns 
 */
export default function getWeek(dayIndex, stringDay, monthMaxIndex) {
    const output = {
        days: []
    };

    if (dayIndex <= -7) {
        return output;
    }

    const nextSundayIndex = dayIndex + 7;
    let indexDayofWeek = 0;
    // Fill empty objects for negatives since we start on the Sunday
    while (dayIndex < 1) {
        // Invalid day placeholder
        dayIndex++;
        indexDayofWeek++;
        output.days.push({})
    }

    let dayInput;
    while ((dayIndex < nextSundayIndex) && (dayIndex <= monthMaxIndex)) {
        // Get the day as a string (Monday, Tuesday, etc)
        stringDay = daysArray[indexDayofWeek];
        dayInput = {
            index: dayIndex,
            day: stringDay
        };
        output.days.push(dayInput);
        dayIndex++;
        indexDayofWeek++;
        // End of the week so reset index and break
        if (indexDayofWeek === 7) {
            indexDayofWeek = 0;
            break;
        }
    }

    // Fill empty objects until there are 7
    while (output.days.length < 7) {
        // Invalid day placeholder
        dayIndex++;
        output.days.push({})
    }
    return output;
}
