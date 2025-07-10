class InMemoryTextRepository {
  constructor() {
    this.lastAnalysis = null;
  }

  save(text) {
    this.lastAnalysis = text;
  }

  get() {
    return this.lastAnalysis;
  }
}

module.exports = InMemoryTextRepository;
