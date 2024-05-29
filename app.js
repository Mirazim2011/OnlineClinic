// const elForm = document.querySelector(".form");
// const elInput1 = document.querySelector(".input-input1");
// const elInput2 = document.querySelector(".input-input2");
// const elInput3 = document.querySelector(".input-input3");
// const elText1 = document.querySelector(".text-1");
// const elText2 = document.querySelector(".text-2");
// const elCheck1 = document.querySelector(".check-1");
// const elCheck2 = document.querySelector(".check-2");
// const elField1 = document.querySelector(".field-1");
// const elField2 = document.querySelector(".field-2");
// const elBtnEye1 = document.querySelector(".btn-eyes-1");

// if (!elField2.value) {
//   elBtnEye1.style.display = "none";
// }
// elInput2.addEventListener("onkeyup", () => {
//   if (!elField2.value) {
//     elBtnEye1.style.display = "none";
//   } else elBtnEye1.style.display = "inline-block";
// });

// elForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   if (elInput1.value.includes("@gmail.com") == false) {
//     elText1.innerHTML = "Enter a valid email address";
//     elInput1.classList.add("danger");
//     elInput1.classList.remove("success");
//     elCheck1.innerHTML =
//       '<img width="38" height="38" src="./images/info-circle-fill.svg"></img>';
//     elText1.style.color = "red";
//     elText1.style.fontFamily = "sans-serif";
//     elField1.classList.add("shake1");
//   } else {
//     elInput1.classList.add("success");
//     elInput1.classList.remove("danger");
//     elText1.innerHTML = "Good Job! Correct!";
//     elText1.style.color = "green";
//     elCheck1.innerHTML =
//       '<img width="38" height="38" src="./images/free-icon-check-mark-4225683.svg">';
//     elText1.style.fontFamily = "sans-serif";
//   }
//   if (elInput2.value.length < 4) {
//     elInput2.classList.add("danger");
//     elInput2.classList.remove("success");
//     elText2.innerHTML = "Password can't be blank";
//     elCheck2.innerHTML =
//       '<img width="38" height="38" src="./images/info-circle-fill.svg"></img>';
//     elText2.style.color = "red";
//     elText2.style.fontFamily = "Poppins";
//     elField2.classList.add("shake2");
//   } else {
//     elInput2.classList.add("success");
//     elInput2.classList.remove("danger");
//     elText2.innerHTML = "Good Job! Correct!";
//     elCheck2.innerHTML =
//       '<img width="38" height="38" src="./images/free-icon-check-mark-4225683.svg">';
//     elText2.style.color = "green";
//     elText2.style.fontFamily = "sans-serif";
//   }
// });
// elBtnEye1.addEventListener("click", function (e) {
//   if (elInput2.type == "text") {
//     elInput2.type = "password";
//     elBtnEye1.innerHTML = '<img src="./images/free-icon-eye-10701451.png"/>';
//     return;
//   } else elInput2.type = "text";
//   elBtnEye1.innerHTML = '<img src="./images/free-icon-eye-closed-94674.png">';
// });
let seeAllBtn = document.querySelector("#example");
let currentItem = 6;

seeAllBtn.onclick = function () {
  let boxes = [
    ...document.querySelectorAll(".example__inner-list .example__inner-item"),
  ];
  for (let i = currentItem; i < currentItem + 6; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 6;
};
