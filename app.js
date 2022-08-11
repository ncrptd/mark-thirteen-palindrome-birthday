//function to reverse the string
function reverseStr(str) {
  return str.split("").reverse().join("");
}
function checkPalindrome(str) {
  return str === reverseStr(str);
}

function convertDateToStr(date) {
  let strDate = { day: "", month: "", year: "" };
  if (date.day < 10) {
    strDate.day = "0" + date.day;
  } else {
    strDate.day = date.day;
  }
  if (date.month < 10) {
    strDate.month = "0" + date.month;
  } else {
    strDate.month = date.month;
  }
  strDate.year = date.year;
  return strDate;
}

function getAllDateVariations(date) {
  let dateStr = convertDateToStr(date);
  let ddmmyyyy = dateStr.day + dateStr.month + dateStr.year;
  let mmddyyyy = dateStr.month + dateStr.day + dateStr.year;
  let yyyymmdd = dateStr.year + dateStr.month + dateStr.day;
  let ddmmyy = dateStr.day | (dateStr.month + dateStr.year.split(-2));
  let mmddyy = dateStr.month + dateStr.day + dateStr.year.split(-2);
  let yymmdd = dateStr.year.split(-2) + dateStr.month + dateStr.day;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}
function checkPalindromeForAllDateFormats(date) {
  let allFormatDates = getAllDateVariations(date);
  let flag = false;
  for (let i = 0; i < allFormatDates.length; i++) {
    if (checkPalindrome(allFormatDates[i])) {
      flag = true;
      break;
    }
  }
  return flag;
}

function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100) {
    return false;
  }
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
let date = {
  day: 29,
  month: 2,
  year: 2021,
};

function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    if (checkLeapYear) {
      if (day > 29) {
        day = 1;
        month++;
      } else {
        if (day > 28) {
          day = 1;
          month++;
        }
      }
    }
  } else {
    if (day > daysInMonth[month - 1]) {
      day = 1;
      month++;
    }
    if (month > 12) {
      month = 1;
      year++;
    }
  }
}

function getNextPalindromeDate(date) {
  let nextDate = nextDate(date);
  let ctr = 0;
  while (true) {
    ctr++;
    let isPalindrome = checkPalindromeForAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
  }
  nextDate = getNextDate(nextDate);
  return [ctr, nextDate];
}
// let dateInput = document.querySelector("#birth-date");
// let showButton = document.querySelector(".show-button");
// let output = document.querySelector(".output");

// function clickHandler() {
//   let birthdayStr = dateInput.value;
//   if (birthdayStr !== "") {
//     let dateArr = birthdayStr.split("-");
//     let date = {
//       day: +dateArr[2],
//       month: +dateArr[1],
//       year: +dateArr[0],
//     };
//   }
// }

// showButton.addEventListener("click", clickHandler);
