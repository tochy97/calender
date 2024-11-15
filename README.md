# Calender-Calculate

Calculation function to build a calender object.

## Getting Started

`npm i @egeonu/calender-calculate`

## Usage

A few examples of useful commands and/or tasks.

### getPast(endYear)
```
import { getPast } from "@egeonu/calender-calculate";
    const past = await getPast(1997)
```
#### Input(s)
* endYear (number): Ending year for timeline.
#### Output
* An array of months starting from January of the input year til December of the current year.

### getYear(today)
```
import { getYear } from "@egeonu/calender-calculate";
    const date = new Date(2024, 10, 30);
    const past = getYear(date)
```
#### Input(s)
* today (Date): Date of month to retrieve.
#### Output
* An array of months starting from January til December of the input.

### getMonth(maxIndex, dayIndex, monthIndex, leap, yearIndex, stringDay)
``` 
import { getMonth } from "@egeonu/calender-calculate";
    const past = getMonth(31, 28, 7, false, 1997, "Monday")
```
#### Input(s)
* monthMax (number): Maximum number of days in the month.
* dayIndex (number): Numeric value for the day.
* monthIndex (number): Numeric value for the month.
* leap (boolean): True/false indicator if it is a leap year.
* yearIndex (number): Numeric value for the year.
* stringDay (string): String value for the day.
#### Output
* weeks (Array): An array of weeks,
* month (string): String value for the month,
* index (number): Numeric value for the month.,
* year (number): Numeric value for the year.,
* isLeap (boolean): True/false indicator if it is a leap year.

### getWeek(dayIndex, stringDay, monthMaxIndex)
```
import { getWeek } from "@egeonu/calender-calculate";
    const past = getWeek(28, "Monday", 31)
```
#### Input(s)
* dayIndex (number): Numeric value for the day.
* stringDay (string): String value for the day.
* monthMaxIndex (number): Maximum number of days in the month.
#### Output
* days (Array): An array of days (object below).
```
type Day = {
    index?: number,
    day?: string
};
```