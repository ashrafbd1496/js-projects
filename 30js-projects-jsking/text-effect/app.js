const containerEl = document.querySelector(".container");
const carrers = ["Web Developer", "Freelancer", "Youtuber", "Instructor"];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  containerEl.innerHTML = `<h1> I am ${
    carrers[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  } <span>${carrers[careerIndex].slice(0, characterIndex)}</span> </h1>`; 
  //  carrers[careerIndex].slice(0, 1) === "I" ? "an" : "a" -this logic used for when need an instead of a
  if (characterIndex === carrers[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === carrers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 200);
}
