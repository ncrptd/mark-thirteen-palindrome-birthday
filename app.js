let dateInput = document.querySelector("#birth-date");
let showButton = document.querySelector(".show-button");
let output = document.querySelector(".output");

function clickHandler() {
  let birthdayStr = dateInput.value;
  if (birthdayStr !== "") {
    let dateArr = birthdayStr.split("-");
    let date = {
      day: +dateArr[2],
      month: +dateArr[1],
      year: +dateArr[0],
    };
    console.log(date);
  }
}

showButton.addEventListener("click", clickHandler);
