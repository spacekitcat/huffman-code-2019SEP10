import Node from '../src/Node';
import expect from 'expect';

describe('`Node`', () => {
  describe('A Node with a value of `8`', () => {
    const specifiedKey = Buffer.from("ice-nine");

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(8, specifiedKey);
    });

    it('should have the expected key', () => {
      expect(sut.getKey()).toMatchObject(specifiedKey);
    });
  });
});
