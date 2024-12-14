export const daysArray =
    [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

export const monthsArray =
    [
        "January",
        "Febuary",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

export const makeSunday = (value, day) => {
    if (value <= -7) {
        value += 7;
    }
    switch (day) {
        case "Monday":
            value -= 1;
            break;
        case "Tuesday":
            value -= 2;
            break;
        case "Wednesday":
            value -= 3;
            break;
        case "Thursday":
            value -= 4;
            break;
        case "Friday":
            value -= 5;
            break;
        case "Saturday":
            value -= 6;
            break;
        default:
            break;
    }
    return [value, "Sunday"]
}

export const nextDay = (day) => {
    let position = daysArray.indexOf(day) - 1;
    if (position === -1) {
        position = 0;
    } 
    return daysArray[position];
}

export const prevDay = (day) => {    
    let position = daysArray.indexOf(day) - 1;
    if (position === -1) {
        position = 6;
    } 
    return daysArray[position];
}

export const monthMax = (month, leap) => {
    switch (month) {
        case 1:
            // Febuary
            if (leap) {
                return 29;
            }
            return 28;
        case 3:
            // April
            return 30;
        case 5:
            // June
            return 30;
        case 8:
            // September
            return 30;
        case 10:
            // November
            return 30;
        default:
            // Others
            return 31;
    }
}

export const nextMonth = (month) => {
    let position = monthsArray.indexOf(month) + 1;
    if (position == -1)
    {
        position = 0;
    }
    return monthsArray[position];
}

export const prevMonth = (month) => {
    let position = monthsArray.indexOf(month) - 1;
    if (position == -1)
    {
        position = 11;
    }
    return monthsArray[position];
}

export const getMonthIndex = (month) => {
    switch (month) {
        case "January":
            return 1;
        case "Febuary":
            return 2;
        case "March":
            return 3;
        case "April":
            return 4;
        case "May":
            return 5;
        case "June":
            return 6;
        case "July":
            return 7;
        case "August":
            return 8;
        case "September":
            return 9;
        case "October":
            return 10;
        case "November":
            return 11;
        case "December":
            return 12;
        default:
            return 0;
    }
}

export const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
}

export const isLeap = (year) => (year % 4 === 0 ? true : false);

export const getNextMonth = (month, maxIndex) => {
    let lastDay = month[month.length - 1].days.find(ele => ele.index === maxIndex)?.day
    if (typeof lastDay === "string") {
        lastDay = nextDay(lastDay);
    }
    else {
        lastDay = ""
    }
    return lastDay;
}

export const getPrevMonth = (month) => {
    let firstDay = month[0].days.find(ele => ele.index === 1)?.day
    if (typeof firstDay === "string") {
        firstDay = prevDay(firstDay);
    }
    else {
        firstDay = ""
    }
    return firstDay;
}