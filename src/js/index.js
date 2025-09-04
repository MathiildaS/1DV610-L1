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
})