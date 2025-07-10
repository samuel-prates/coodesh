const express = require('express');
const TextAnalysisService = require('../../application/TextAnalysisService');
const HuggingFaceSentimentAnalysisService = require('../services/HuggingFaceSentimentAnalysisService');
const InMemoryTextRepository = require('../repositories/InMemoryTextRepository');

const app = express();
const port = 3000;

app.use(express.json());

const textRepository = new InMemoryTextRepository();
const sentimentAnalysisService = new HuggingFaceSentimentAnalysisService();
const textAnalysisService = new TextAnalysisService(sentimentAnalysisService, textRepository);

app.post('/analyze-text', async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }

  try {
    const analysis = await textAnalysisService.analyze(text);
    res.json(analysis);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/search-term', (req, res) => {
  const { term } = req.query;

  if (!term) {
    return res.status(400).json({ error: 'Term is required' });
  }

  const result = textAnalysisService.search(term);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});