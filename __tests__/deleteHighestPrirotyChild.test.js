import deleteHighestPriorityChild from '../src/deleteHighestPriorityChild';
import Node from '../src/Node';
import appendNodeToHeap from '../src/appendNodeToHeap';

describe('HeapAppend', () => {
  describe('Delete from null', () => {
    it('returns null', () => {
      expect(deleteHighestPriorityChild(null)).toBeNull();
    });
  });

  describe('Delete from single leaf tree', () => {
    let rootNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toBeNull();
    });
  });

  describe('Delete from a tree with a higher priority child', () => {
    let rootNode;
    let childNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(2, 'h');
      childNode = new Node(3, 'g');
      appendNodeToHeap(rootNode, childNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(rootNode);
      expect(newRootNode.getRightChild()).toBeNull();
    });
  });

  describe('Delete from a tree with a lower priority child', () => {
    let rootNode;
    let childNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(5, 'x');
      childNode = new Node(1, 'x');
      appendNodeToHeap(rootNode, childNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(childNode);
    });
  });

  describe('Delete from a tree with a higher priority child and a lower priority child', () => {
    let rootNode;
    let childNodeHigher;
    let childNodeLower;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(2, 'a');
      childNodeHigher = new Node(3, 'c');
      appendNodeToHeap(rootNode, childNodeHigher);
      childNodeLower = new Node(1, 'q');
      appendNodeToHeap(rootNode, childNodeLower);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(rootNode);
      expect(newRootNode.getRightChild()).toBeNull();
      expect(newRootNode.getLeftChild()).toMatchObject(childNodeLower);
    });
  });

  describe('Delete from a tree with a lower priority child with a lower priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(7, '7');
      childNode = new Node(6, '5');
      childChildNode = new Node(4, 'w');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(childNode);
      expect(newRootNode.getLeftChild()).toMatchObject(childChildNode);
      expect(newRootNode.getRightChild()).toBeNull();
    });
  });

  describe('Delete from a tree with a lower priority child with a higher priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(7, '7');
      childNode = new Node(4, '5');
      childChildNode = new Node(6, 'w');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(childNode);
      expect(newRootNode.getLeftChild()).toBeNull();
      expect(newRootNode.getRightChild()).toMatchObject(childChildNode);
    });
  });

  describe('Delete from a tree with a higher priority child with a lower priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(2, 'o');
      childNode = new Node(6, 'q');
      childChildNode = new Node(4, 'v');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(rootNode);
      expect(newRootNode.getLeftChild()).toBeNull();
      expect(newRootNode.getRightChild()).toMatchObject(childChildNode);
    });
  });

  describe('Delete from a tree with a higher priority child with a higher priority child', () => {
    let rootNode;
    let childNode;
    let childChildNode;
    let newRootNode;
    beforeAll(() => {
      rootNode = new Node(2, 'b');
      childNode = new Node(6, 'm');
      childChildNode = new Node(9, 'o');
      appendNodeToHeap(rootNode, childNode);
      appendNodeToHeap(rootNode, childChildNode);
      newRootNode = deleteHighestPriorityChild(rootNode);
    });

    it('returns the pop values', () => {
      expect(newRootNode).toMatchObject(rootNode);
      expect(newRootNode.getLeftChild()).toBeNull();
      expect(newRootNode.getRightChild()).toMatchObject(childNode);
      expect(newRootNode.getRightChild().getRightChild()).toBeNull();
      expect(newRootNode.getRightChild().getLeftChild()).toBeNull();
    });
  });
});
