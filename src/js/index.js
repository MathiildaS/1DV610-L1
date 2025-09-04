/**
 * The main script file of the application.
 *
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

import { countVowelsConsonants } from "./count.js";

let enteredName = document.getElementById('userInput')
let enterBtn = document.getElementById('enterBtn')
let vowels = document.getElementById('vowels')
let consonants = document.getElementById('consonants')

enterBtn.addEventListener("click", () => {
const countedName = countVowelsConsonants(enteredName.value)

vowels.textContent = countedName.vowels
consonants.textContent = countedName.consonants

document.getElementById("userName").textContent = enteredName.value;
document.getElementById("greeting").style.display = "block";
getCatImage()
})

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    enterBtn.click()
}})

async function getCatImage() {
  const url = "https://api.thecatapi.com/v1/images/search"
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    console.log(result)

    const image = document.createElement('img')
    image.src = `${result[0].url}`;
    image.alt = "A random cat"
    image.style.maxWidth = "300px"
    image.style.borderRadius = "15px"

    document.getElementById('catImage').replaceChildren(image)
  } catch (error) {
    console.error(error.message)
  }
}