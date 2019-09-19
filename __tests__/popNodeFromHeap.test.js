import popNodeFromHeap from '../src/popNodeFromHeap';
import Node from '../src/Node';
import appendNodeToHeap from '../src/appendNodeToHeap';

describe('HeapAppend', () => {
  describe('Pop from null', () => {
    it('returns null', () => {
      expect(popNodeFromHeap(null)).toMatchObject({
        returned: null,
        newRoot: null
      });
    });
  });

  describe('Pop from single leaf tree', () => {
    let rootNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      popValue = popNodeFromHeap(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject({ returned: rootNode, newRoot: null });
    });
  });

  describe('Pop from a tree with a higher priority child', () => {
    let rootNode;
    let childNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      childNode = new Node(3, 'g');
      appendNodeToHeap(rootNode, childNode);
      popValue = popNodeFromHeap(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject({
        returned: childNode,
        newRoot: rootNode
      });
    });
  });

  describe('Pop from a tree with a lower priority child', () => {
    let rootNode;
    let childNode;
    let popValue;
    beforeAll(() => {
      rootNode = new Node(5, 'x');
      childNode = new Node(1, 'x');
      appendNodeToHeap(rootNode, childNode);
      popValue = popNodeFromHeap(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject({
        returned: rootNode,
        newRoot: childNode
      });
    });
  });

  describe('Pop from a tree with a higher priority child and a lower priority child', () => {
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
      popValue = popNodeFromHeap(rootNode);
    });

    it('returns the pop values', () => {
      expect(popValue).toMatchObject({
        returned: childNodeHigher,
        newRoot: rootNode
      });
    });
  });
});
