const TextAnalysisService = require('../../src/application/TextAnalysisService');
const Text = require('../../src/domain/Text');

describe('TextAnalysisService', () => {
  it('should analyze a text', async () => {
    const sentimentAnalysisService = {
      analyze: jest.fn().mockResolvedValue({ label: 'POSITIVE', score: 0.99 }),
    };
    const textRepository = {
      save: jest.fn(),
      get: jest.fn(),
    };

    const service = new TextAnalysisService(sentimentAnalysisService, textRepository);
    const text = 'O dia está lindo hoje';
    const analysis = await service.analyze(text);

    expect(analysis.wordCount).toBe(5);
    expect(analysis.top5Words).toEqual(['dia', 'está', 'lindo', 'hoje']);
    expect(analysis.sentiment).toEqual({ label: 'POSITIVE', score: 0.99 });
    expect(textRepository.save).toHaveBeenCalledWith(analysis);
  });

  it('should search for a term in the last analysis', () => {
    const textRepository = {
      get: jest.fn().mockReturnValue(new Text('O dia está lindo hoje')),
      save: jest.fn(),
    };
    const sentimentAnalysisService = {
      analyze: jest.fn(),
    };

    const service = new TextAnalysisService(sentimentAnalysisService, textRepository);
    const result = service.search('lindo');

    expect(result.found).toBe(true);
  });
});
