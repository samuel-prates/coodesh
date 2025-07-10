class Text {
  constructor(text) {
    this.text = text;
    this.wordCount = 0;
    this.top5Words = [];
    this.sentiment = null;
  }
}

module.exports = Text;
