import Node from '../src/Node';
import expect from 'expect';

describe('`Node`', () => {
  describe('A Node with a value of `8` and a key of `ice-nine`', () => {
    const specifiedValue = 8;
    const specifiedKey = Buffer.from('ice-nine');

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
    });

    it('should have the expected value', () => {
      expect(sut.getValue()).toBe(specifiedValue);
    });

    it('should have the expected key', () => {
      expect(sut.getKey()).toMatchObject(specifiedKey);
    });

    it('should have a null left child', () => {
      expect(sut.getLeftChild()).toBeNull();
    });

    it('should have a null right child', () => {
      expect(sut.getRightChild()).toBeNull();
    });

    it('should return the correct aggregate sum', () => {
      expect(sut.getAggregateSum()).toBe(8);
    });
  });

  describe('A Node with a value of `0` and a key of `vic-reeves`', () => {
    const specifiedValue = 0;
    const specifiedKey = Buffer.from('vic-reeves');

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
    });

    it('should have the expected value', () => {
      expect(sut.getValue()).toBe(specifiedValue);
    });

    it('should have the expected key', () => {
      expect(sut.getKey()).toMatchObject(specifiedKey);
    });

    it('should have a null left child', () => {
      expect(sut.getLeftChild()).toBeNull();
    });

    it('should have a null right child', () => {
      expect(sut.getRightChild()).toBeNull();
    });

    it('should return the correct aggregate sum', () => {
      expect(sut.getAggregateSum()).toBe(0);
    });
  });

  describe('A Node (0, purple-monkey-dishwasher) with one left child', () => {
    const specifiedValue = 0;
    const specifiedKey = Buffer.from('purple-monkey-dishwasher');
    const specifiedLeftChild = new Node(3, Buffer.from('mr-bones-wild-ride'));

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
      sut.setLeftChild(specifiedLeftChild);
    });

    it('should have the expected value', () => {
      expect(sut.getValue()).toBe(specifiedValue);
    });

    it('should have the expected key', () => {
      expect(sut.getKey()).toMatchObject(specifiedKey);
    });

    it('should have the expected left child', () => {
      expect(sut.getLeftChild()).toMatchObject(specifiedLeftChild);
    });

    it('should have a null right child', () => {
      expect(sut.getRightChild()).toBeNull();
    });

    it('should return the correct aggregate sum', () => {
      expect(sut.getAggregateSum()).toBe(3);
    });
  });

  describe('A Node (5, Weetabix) with one right child', () => {
    const specifiedValue = 5;
    const specifiedKey = Buffer.from('Weetabix');
    const specifiedRightChild = new Node(2, Buffer.from('Alpen'));

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
      sut.setRightChild(specifiedRightChild);
    });

    it('should have the expected value', () => {
      expect(sut.getValue()).toBe(specifiedValue);
    });

    it('should have the expected key', () => {
      expect(sut.getKey()).toMatchObject(specifiedKey);
    });

    it('should have the expected right child', () => {
      expect(sut.getRightChild()).toMatchObject(specifiedRightChild);
    });

    it('should have a null left child', () => {
      expect(sut.getLeftChild()).toBeNull();
    });

    it('should return the correct aggregate sum', () => {
      expect(sut.getAggregateSum()).toBe(7);
    });
  });
});
