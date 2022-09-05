const userInput = document.querySelector("textarea");
const button = document.querySelector("button");
const translatedData = document.querySelector(".translated");

button.addEventListener("click", () => {
  const API = `https://api.funtranslations.com/translate/klingon.json?text=${userInput.value}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      translatedData.innerHTML = data.contents.translated;
    })
    .catch((err) => {
      alert("Something went error. Try again Later");
      console.log(err);
    });
});
