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

  describe('A Node (9, Weetabix) with right child with a left child', () => {
    const specifiedValue = 9;
    const specifiedKey = Buffer.from('Weetabix');
    const specifiedRightChild = new Node(2, Buffer.from('Alpen'));
    const specifiedRightLeftChild = new Node(3, Buffer.from('RiceKrispies'));

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
      specifiedRightChild.setLeftChild(specifiedRightLeftChild);
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
      expect(sut.getAggregateSum()).toBe(14);
    });
  });

  describe('A Node (1, Weetabix) with left child with a right child', () => {
    const specifiedValue = 1;
    const specifiedKey = Buffer.from('Weetabix');
    const specifiedLeftChild = new Node(16, Buffer.from('Alpen'));
    const specifiedRightRightChild = new Node(54, Buffer.from('RiceKrispies'));

    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
      specifiedLeftChild.setLeftChild(specifiedRightRightChild);
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
      expect(sut.getAggregateSum()).toBe(71);
    });
  });

  describe('Internal nodes', () => {
    const specifiedValue = 1;
    const specifiedKey = Buffer.from('Weetabix');
    const internalLeft = new Node();
    const internalRight = new Node();
    let sut = new Node();
    beforeAll(() => {
      sut = new Node(specifiedValue, specifiedKey);
      sut.setInternalLeftChild(internalLeft);
      sut.setInternalRightChild(internalRight);
    });

    it('should have the expected internal right value', () => {
      expect(sut.getInternalRightChild()).toMatchObject(internalRight);
    });

    it('should have the expected internal left value', () => {
      expect(sut.getInternalLeftChild()).toMatchObject(internalLeft);
    });
  });
});
