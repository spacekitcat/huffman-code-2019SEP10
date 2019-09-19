import popNodeFromHeap from '../src/popNodeFromHeap';
import Node from '../src/Node';

describe('HeapAppend', () => {
  describe('Pop from null', () => {
    it('returns null', () => {
      expect(popNodeFromHeap(null)).toBe(null);
    });
  });

  describe('Pop from single lead tree', () => {
    it('returns null', () => {
      const rootNode = new Node(2, 'h');
      expect(popNodeFromHeap(rootNode)).toMatchObject(rootNode);
    });
  });
});
