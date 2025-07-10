const Text = require('../domain/Text');
const { removeStopwords, por } = require('stopword');

class TextAnalysisService {
  constructor(sentimentAnalysisService, textRepository) {
    this.sentimentAnalysisService = sentimentAnalysisService;
    this.textRepository = textRepository;
  }

  async analyze(text) {
    const textObject = new Text(text);

    const words = text.toLowerCase().split(/\s+/);
    textObject.wordCount = words.length;

    const filteredWords = removeStopwords(words, por);

    const wordFrequencies = {};
    for (const word of filteredWords) {
      wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
    }

    const sortedWords = Object.entries(wordFrequencies).sort((a, b) => b[1] - a[1]);
    textObject.top5Words = sortedWords.slice(0, 5).map(entry => entry[0]);

    textObject.sentiment = await this.sentimentAnalysisService.analyze(text);

    this.textRepository.save(textObject);

    return textObject;
  }

  search(term) {
    const lastAnalysis = this.textRepository.get();
    if (!lastAnalysis) {
      return { found: false, message: 'No analysis found' };
    }

    const found = lastAnalysis.text.toLowerCase().includes(term.toLowerCase());
    return { found };
  }
}

module.exports = TextAnalysisService;
