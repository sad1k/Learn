// leftChild = heap[2 * i]
// rightChild = heap[(2 * i) + 1]
// parent = heap[i // 2]
// MinHeap
class Heap {
  constructor() {
    this.heap = [0];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;

    while (this.heap[Math.floor(i / 2)] > val) {
      let temp = this.heap[Math.floor(i / 2)];
      this.heap[Math.floor(i / 2)] = val;
      this.heap[i] = temp;
      i = Math.floor(i / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return null;
    }
    if (this.heap.length === 2) {
      return this.heap.pop();
    }

    res = this.heap[1];
    this.heap[1] = this.heap.pop();
    let i = 1;
    while (2 * i < this.heap.length) {
      if (
        2 * i + 1 < this.heap.length &&
        this.heap[2 * i] > this.heap[2 * i + 1] &&
        this.heap[i] > this.heap[2 * i + 1]
      ) {
        let temp = this.heap[2 * i + 1];
        this.heap[2 * i + 1] = this.heap[i];
        this.heap[i] = temp;
        i = 2 * i + 1;
      } else if (this.heap[2 * i] < this.heap[i]) {
        let temp = this.heap[2 * i];
        this.heap[2 * i] = this.heap[i];
        this.heap[i] = temp;
        i = 2 * i;
      } else {
        break;
      }
    }
    return res;
  }
}
