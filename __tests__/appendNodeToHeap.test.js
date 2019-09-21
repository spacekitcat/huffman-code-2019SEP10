import appendNodeToHeap from '../src/appendNodeToHeap';
import Node from '../src/Node';

describe('HeapAppend', () => {
  describe('Adding a single child to a null root', () => {
    describe('Adding a higher priority child', () => {
      let rootNode;
      let childNode;
      beforeAll(() => {
        rootNode = null;
        childNode = new Node(8, Buffer.from('a'));

        rootNode = appendNodeToHeap(rootNode, childNode);
      });

      it('has the expected root node', () => {
        expect(rootNode).toMatchObject(childNode);
      });
    });

    describe('Adding a lower priority child', () => {
      let rootNode;
      let childNode;
      beforeAll(() => {
        rootNode = null;
        childNode = new Node(4, Buffer.from('a'));

        rootNode = appendNodeToHeap(rootNode, childNode);
      });

      it('has the expected root node', () => {
        expect(rootNode).toMatchObject(childNode);
      });
    });
  });

  describe('Adding a single child to a single root', () => {
    describe('Adding a higher priority child', () => {
      let rootNode;
      let childNode;
      beforeAll(() => {
        rootNode = new Node(2, Buffer.from('y'));
        childNode = new Node(8, Buffer.from('a'));

        rootNode = appendNodeToHeap(rootNode, childNode);
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

        rootNode = appendNodeToHeap(rootNode, childNode);
      });

      it('has the expected left child', () => {
        expect(rootNode.getLeftChild()).toMatchObject(childNode);
      });
    });
  });

  describe('Adding a single child to a root with an existing higher priority child', () => {
    describe('Adding a higher priority child', () => {
      let rootNode;
      let childNode;
      let childChildNode;
      beforeAll(() => {
        rootNode = new Node(9, Buffer.from('y'));
        childNode = new Node(10, Buffer.from('i'));
        childChildNode = new Node(11, Buffer.from('x'));

        rootNode = appendNodeToHeap(rootNode, childNode);
        rootNode = appendNodeToHeap(rootNode, childChildNode);
      });

      it('has the expected right child', () => {
        expect(rootNode.getRightChild()).toMatchObject(childNode);
      });

      it('has the expected right /right/ child', () => {
        expect(rootNode.getRightChild().getRightChild()).toMatchObject(
          childChildNode
        );
      });
    });

    describe('Adding a lower priority child', () => {
      let rootNode;
      let childNode;
      let childChildNode;
      beforeAll(() => {
        rootNode = new Node(9, Buffer.from('c'));
        childNode = new Node(12, Buffer.from('b'));
        childChildNode = new Node(10, Buffer.from('r'));

        rootNode = appendNodeToHeap(rootNode, childNode);
        rootNode = appendNodeToHeap(rootNode, childChildNode);
      });

      it('has the expected right child', () => {
        expect(rootNode.getRightChild()).toMatchObject(childNode);
      });

      it('has the expected right /left/ child', () => {
        expect(rootNode.getRightChild().getLeftChild()).toMatchObject(
          childChildNode
        );
      });
    });
  });

  describe('Adding a single child to a root with an existing lower priority child', () => {
    describe('Adding a higher priority child', () => {
      let rootNode;
      let childNode;
      let childChildNode;
      beforeAll(() => {
        rootNode = new Node(11, Buffer.from('v'));
        childNode = new Node(9, Buffer.from('b'));
        childChildNode = new Node(10, Buffer.from('p'));

        rootNode = appendNodeToHeap(rootNode, childNode);
        rootNode = appendNodeToHeap(rootNode, childChildNode);
      });

      it('has the expected right child', () => {
        expect(rootNode.getLeftChild()).toMatchObject(childNode);
      });

      it('has the expected right /right/ child', () => {
        expect(rootNode.getLeftChild().getRightChild()).toMatchObject(
          childChildNode
        );
      });
    });

    describe('Adding a lower priority child', () => {
      let rootNode;
      let childNode;
      let childChildNode;
      beforeAll(() => {
        rootNode = new Node(11, Buffer.from('v'));
        childNode = new Node(10, Buffer.from('b'));
        childChildNode = new Node(9, Buffer.from('p'));

        rootNode = appendNodeToHeap(rootNode, childNode);
        rootNode = appendNodeToHeap(rootNode, childChildNode);
      });

      it('has the expected right child', () => {
        expect(rootNode.getLeftChild()).toMatchObject(childNode);
      });

      it('has the expected right /right/ child', () => {
        expect(rootNode.getLeftChild().getLeftChild()).toMatchObject(
          childChildNode
        );
      });
    });
  });
});
