/**
 * A function to count vowels and consonants in a word
 *
 * @author Mathilda Segerlund <ms228qs@student.lnu.se>
 * @version 1.0.0
 */

export function countVowelsConsonants (name) {
  let vowels = 0
  let consonants = 0

  let arrOfVowels = ['a', 'e', 'i', 'o', 'u', 'å', 'ä', 'ö']

  for (let i = 0; i < name.length; i++) {
    if (arrOfVowels.includes(name[i])) {
      vowels += 1 
    } else {
      consonants += 1
    }
  }
  return {vowels, consonants}
}