function isLeapYear(year){
    if(year % 400 == 0)
        return `${year} is a leap year`;
    if(year % 100 == 0)
        return `${year} is not a leap year`;
    if(year % 4 == 0)
        return `${year} is a leap year`;
    return `${year} is not a leap year`;
}

var year = prompt("Please enter the year: ");
console.log(isLeapYear(year));