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
    strDate.day = date.day.toString();
  }
  if (date.month < 10) {
    strDate.month = "0" + date.month;
  } else {
    strDate.month = date.month.toString();
  }

  strDate.year = date.year.toString();
  return strDate;
}
function getAllDateVariations(date) {
  let strDate = convertDateToStr(date);
  let ddmmyyyy = strDate.day + strDate.month + strDate.year;
  let mmddyyyy = strDate.month + strDate.day + strDate.year;
  let yyyymmdd = strDate.year + strDate.month + strDate.day;
  let ddmmyy = strDate.day + strDate.month + strDate.year.slice(-2);
  let mmddyy = strDate.month + strDate.day + strDate.year.slice(-2);
  let yymmdd = strDate.year.slice(-2) + strDate.month + strDate.year;
  return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
}
function checkPalindromeAllDateFormats(date) {
  let allFormatDates = getAllDateVariations(date);
  let isPalindrome = false;
  for (let i = 0; i < allFormatDates.length; i++) {
    if (checkPalindrome(allFormatDates[i])) {
      isPalindrome = true;
      break;
    }
  }
  return isPalindrome;
}
function checkLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  }
  if (year % 100 === 0) {
    return false;
  }
  if (year % 1 === 0) {
    return true;
  }
  return false;
}
function getNextDate(date) {
  let day = date.day + 1;
  let month = date.month;
  let year = date.year;
  let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2) {
    if (checkLeapYear(year)) {
      if (day > 29) {
        day = 1;
        month++;
      }
    }
    if (day > 28) {
      day = 1;
      month++;
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
  return { day: day, month: month, year: year };
}
function getNextPalindromeDate(date) {
  let ctr = 0;
  let nextDate = getNextDate(date);
  while (true) {
    ctr++;
    let isPalindrome = checkPalindromeAllDateFormats(nextDate);
    if (isPalindrome) {
      break;
    }
    nextDate = getNextDate(nextDate);
  }
  return [ctr, nextDate];
}
let userInput = document.querySelector("#user-date-input");
let showButton = document.querySelector("#show-button");
let outputEl = document.querySelector(".output");

function clickHandler() {
  let dateInput = userInput.value;
  if (dateInput !== "") {
    let dateList = dateInput.split("-");
    let date = {
      day: +dateList[2],
      month: +dateList[1],
      year: +dateList[0],
    };
    let palindrome = checkPalindromeAllDateFormats(date);
    if (palindrome) {
      outputEl.innerText = "Yay Your birthday is palindrome";
    } else {
      let [counter, nextPalindromeDate] = getNextPalindromeDate(date);
      outputEl.innerText = `Oops you missed it by ${counter} days. Next palindrome date is ${nextPalindromeDate.month}-${nextPalindromeDate.day}-${nextPalindromeDate.year}`;
    }
  }
}

showButton.addEventListener("click", clickHandler);
