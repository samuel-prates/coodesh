const Text = require('../../src/domain/Text');

describe('Text', () => {
  it('should create a new Text object', () => {
    const text = new Text('some text');
    expect(text.text).toBe('some text');
    expect(text.wordCount).toBe(0);
    expect(text.top5Words).toEqual([]);
    expect(text.sentiment).toBeNull();
  });
});
