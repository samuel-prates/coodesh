const HuggingFaceSentimentAnalysisService = require('../../../src/infrastructure/services/HuggingFaceSentimentAnalysisService');
const axios = require('axios');

jest.mock('axios');

describe('HuggingFaceSentimentAnalysisService', () => {
  it('should return sentiment analysis', async () => {
    const service = new HuggingFaceSentimentAnalysisService();
    const mockResponse = { data: { label: 'POSITIVE', score: 0.99 } };
    axios.post.mockResolvedValue(mockResponse);

    const sentiment = await service.analyze('some text');

    expect(sentiment).toEqual(mockResponse.data);
    expect(axios.post).toHaveBeenCalledWith(
      'https://api-inference.huggingface.co/models/pysentimiento/bertweet-pt-sentiment',
      { inputs: 'some text' },
      {
        headers: { Authorization: `Bearer ${process.env.HF_TOKEN}` },
      }
    );
  });
});
