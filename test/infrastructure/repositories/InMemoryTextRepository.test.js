const InMemoryTextRepository = require('../../../src/infrastructure/repositories/InMemoryTextRepository');
const Text = require('../../../src/domain/Text');

describe('InMemoryTextRepository', () => {
  it('should save and get a text', () => {
    const repository = new InMemoryTextRepository();
    const text = new Text('some text');
    repository.save(text);
    const retrievedText = repository.get();
    expect(retrievedText).toBe(text);
  });
});
