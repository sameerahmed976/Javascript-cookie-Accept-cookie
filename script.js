const buttonUnderstand = document.querySelector(".btn-understand");
const card = document.querySelector(".card");

buttonUnderstand.addEventListener("click", () => {
  //   console.log("click");

  // one month
  document.cookie = `myName=value; max-age= ${60 * 60 * 24 * 30}`;

  if (document.cookie) {
    card.classList.add("card-hide");
  } else {
    alert(`Cookie cannot be set`);
    card.classList.remove("card-hide");
  }
});
let checkCookie = document.cookie.indexOf("myName=value");
// console.log(
//   "🚀 ~ file: script.js ~ line 18 ~ buttonUnderstand.addEventListener ~ checkCookie",
//   checkCookie
// );
checkCookie !== -1
  ? card.classList.add("card-hide")
  : card.classList.remove("card-hide");

// console.log("click");
