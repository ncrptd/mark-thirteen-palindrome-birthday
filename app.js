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
let date = {
  day: 1,
  month: 1,
  year: 2020,
};
console.log(convertDateToStr(date));
// let dateInput = document.querySelector("#birth-date");
// let showButton = document.querySelector(".show-button");
// let output = document.querySelector(".output");

// function clickHandler() {
//   let birthdayStr = dateInput.value;
//   if (birthdayStr !== "") {
//     let dateArr = birthdayStr.split("-");
//     let date = {
//       day: dateArr[2],
//       month: dateArr[1],
//       year: dateArr[0],
//     };
//   }
// }

// showButton.addEventListener("click", clickHandler);
