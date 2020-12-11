/**
 * Provide utilities for parsing String value
 */
const StringUtil = {

  /**
   * Capitalize first letter on each word
   *
   * i.e `this is text` => `This Is Text`
   * @param {string} text
   */
  capitalize: (text) => {
    const capitalizedText = text.split(' ').map((word) => {
      const firstLetter = word.slice(0, 1).toUpperCase()
      const otherLetters = word.substr(1, word.length).toLowerCase()

      return `${firstLetter}${otherLetters}`
    }).join(' ')

    return capitalizedText
  }
}

export default StringUtil