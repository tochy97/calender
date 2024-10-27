import { getPast, getYear, getMonth } from "@egeonu/calender-calculate";

let allSevens = true;

getPast(1997).then(res => {
    res.forEach(month => {
        month.weeks.forEach((week) => {
            if (week.days.length !== 7) {
                allSevens = false;
            }
        })
    });
})

if (allSevens) {
    console.log("All seven true");
}
else {
    console.log("All seven false")
}

let date = new Date(2024, 10, 30);
let year = getYear(date);
let day = year[0].weeks[0].days.find((ele) => ele.index === 1)?.day;

if (day === "Monday") {
    console.log("Year: 2024 starts on a Monday");
}
else {
    console.log("Year: 2024 does NOT starts on Monday")
}

date = new Date(1997, 10, 30);
year = getYear(date);
day = year[0].weeks[0].days.find((ele) => ele.index === 1)?.day;

if (day === "Wednesday") {
    console.log("Year: 1997 starts on Wednesday");
}
else {
    console.log("Year: 1997 does NOT starts on Wednesday")
}
const month = getMonth(31, 28, 7, false, 1997, "Monday");
let emptyWeek = true;
let notEmptyweeks = 0;
month.weeks.forEach(element => {
    element.days.forEach((ele) => {
        if (Object.keys(ele).length !== 0) {
            emptyWeek = false;
        }
    })
    if (!emptyWeek) {
        notEmptyweeks += 1;
    }
});

if (allSevens) {
    console.log("Month: No empty weeks");
}
else {
    console.log("Empty Weeks");
}