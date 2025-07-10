const axios = require('axios');

class HuggingFaceSentimentAnalysisService {
  async analyze(text) {
    try {
      const response = await axios.post(
        'https://api-inference.huggingface.co/models/pysentimiento/bertweet-pt-sentiment',
        { inputs: text },
        {
          headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` },
        }
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Failed to analyze sentiment');
    }
  }
}

module.exports = HuggingFaceSentimentAnalysisService;
