// eslint-disable-next-line @typescript-eslint/no-unused-vars
import text from './LoremIpsumText'

export default class LoremIpsumUtil {
  private words: string[]
  private readonly endChars = ['.', '?', '!', '']

  constructor() {
    this.words = []
    text.split(' ').forEach((word) => {
      if (word.length > 1) {
        this.words.push(word.toLowerCase().replace('.', '').replace(',', ''))
      }
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getRandomSentence(maxWords: number): string {
    let sentence = ''
    for (let i = 0; i < maxWords; i++) {
      const index = Math.floor(Math.floor(Math.random() * this.words.length))
      let word = this.words[index]
      if (i === 0) {
        word = word[0].toUpperCase() + word.slice(1)
      }
      sentence = sentence + word
      if (i === maxWords - 1) {
        const endIndex = Math.floor(Math.floor(Math.random() * this.endChars.length))
        sentence = sentence + this.endChars[endIndex]
      } else {
        sentence = sentence + ' '
      }
    }
    return sentence
  }
}
