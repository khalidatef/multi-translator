import { countries } from "./data.js";
const fromLanguage = document.querySelector("#fromLanguage");
const toLanguage = document.querySelector("#toLanguage");
const btn = document.querySelector(".btn");
const textFrom = document.querySelector(".text-from");
const textTo = document.querySelector(".text-to");
const errorMessage = document.querySelector(".error");
//

let arrOfCountries = Object.entries(countries)
  .map(([code, language]) => {
    return `<option value="${code}">${language}</option>`;
  })
  .join("");

fromLanguage.innerHTML = arrOfCountries;
toLanguage.innerHTML = arrOfCountries;
fromLanguage[19].selected = true;
toLanguage[1].selected = true;

//
btn.addEventListener("click", () => {
  fetch(
    ` https://api.mymemory.translated.net/get?q=${textFrom.value}&langpair=${fromLanguage.value}|${toLanguage.value}`,
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      textTo.value = data.responseData.translatedText;
    })
    .catch((err) => {
      console.log(err);
      errorMessage.innerHTML = `<h1 class="text-danger mt-5 text-center">Can't load Api Please try agin</h1>`;
    });
});
