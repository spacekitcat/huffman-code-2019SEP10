import ByteOccurrenceCountStream from '../src/ByteOccurrenceCountStream';

const executeCountTest = (input, expectation) =>
  new Promise(resolve => {
    const stream = new ByteOccurrenceCountStream();

    stream.on('finish', () => {
      expect(stream.getOccurrences()).toMatchObject(expectation);
      resolve();
    });

    stream.write(Buffer.from(input));
    stream.end();
  });

describe('`ByteOccurrenceCountStream` module', () => {
  it('Empty input', async () => {
    await executeCountTest(Buffer.from(''), {});
  });

  it('`a` input', async () => {
    await executeCountTest(Buffer.from('a'), { 97: 1 });
  });

  it('`z` input', async () => {
    await executeCountTest(Buffer.from('z'), { 122: 1 });
  });

  it('`bb` input', async () => {
    await executeCountTest(Buffer.from('bb'), { 98: 2 });
  });

  it('`abbccc` input', async () => {
    await executeCountTest(Buffer.from('abbccc'), { 97: 1, 98: 2, 99: 3 });
  });
});
