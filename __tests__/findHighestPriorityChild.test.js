import findHighestPriorityChild from '../src/findHighestPriorityChild';
import Node from '../src/Node';
import appendNodeToHeap from '../src/appendNodeToHeap';

describe('HeapAppend', () => {
  describe('Find highest priority from null', () => {
    it('returns null', () => {
      expect(findHighestPriorityChild(null)).toBeNull();
    });
  });

  describe('Find highest priority from single leaf tree', () => {
    let rootNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(rootNode);
    });
  });

  describe('Find highest priority from a tree with a higher priority child', () => {
    let rootNode;
    let childNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      childNode = new Node(3, 'g');
      appendNodeToHeap(rootNode, childNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(childNode);
    });
  });

  describe('Find highest priority from a tree with a lower priority child', () => {
    let rootNode;
    let childNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(5, 'x');
      childNode = new Node(1, 'x');
      appendNodeToHeap(rootNode, childNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(rootNode);
    });
  });

  describe('Find highest priority from a tree with a higher priority child and a lower priority child', () => {
    let rootNode;
    let childNodeHigher;
    let childNodeLower;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'a');
      childNodeHigher = new Node(3, 'c');
      appendNodeToHeap(rootNode, childNodeHigher);
      childNodeLower = new Node(1, 'q');
      appendNodeToHeap(rootNode, childNodeLower);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(childNodeHigher);
    });
  });

  describe('Find highest priority from a tree with a lower priority child with a lower priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(7, '7');
      childNode = new Node(6, '5');
      childChildNode = new Node(4, 'w');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(rootNode);
    });
  });

  describe('Find highest priority from a tree with a lower priority child with a higher priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(7, '7');
      childNode = new Node(4, '5');
      childChildNode = new Node(6, 'w');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(rootNode);
    });
  });

  describe('Find highest priority from a tree with a higher priority child with a lower priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'o');
      childNode = new Node(6, 'q');
      childChildNode = new Node(4, 'v');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject(childNode);
    });
  });

  describe('Find highest priority from a tree with a higher priority child with a higher priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'b');
      childNode = new Node(6, 'm');
      childChildNode = new Node(9, 'o');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      popValue = findHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      rootNode.setRightChild(null);
      expect(popValue).toMatchObject(childChildNode);
    });
  });
});
