import appendNodeToHeap from '../src/appendNodeToHeap';
import Node from '../src/Node';

describe('HeapAppend', () => {
  describe('Adding a single child to a single root', () => {
    describe('Adding a higher priority child', () => {
      let rootNode;
      let childNode;
      beforeAll(() => {
        rootNode = new Node(2, Buffer.from('y'));
        childNode = new Node(8, Buffer.from('a'));

        appendNodeToHeap(rootNode, childNode);
      });

      it('has the expected right child', () => {
        expect(rootNode.getRightChild()).toMatchObject(childNode);
      });
    });

    describe('Adding a lower priority child', () => {
      let rootNode;
      let childNode;
      beforeAll(() => {
        rootNode = new Node(5, Buffer.from('y'));
        childNode = new Node(4, Buffer.from('a'));

        appendNodeToHeap(rootNode, childNode);
      });

      it('has the expected left child', () => {
        expect(rootNode.getLeftChild()).toMatchObject(childNode);
      });
    });
  });
});
