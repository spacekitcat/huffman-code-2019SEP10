import { Transform } from 'stream';

class ByteOccurrenceCountStream extends Transform {
  constructor() {
    super({ objectMode: true });

    this.occurrences = {};
  }

  _transform(chunk, encoding, callback) {
    for (const b of chunk) {

      if (b === 10) {
        continue;
      }
      let currentOccurrence = this.occurrences[b];
      if (currentOccurrence === undefined) {
        currentOccurrence = 1;
      } else {
        ++currentOccurrence;
      }

      this.occurrences[b] = currentOccurrence;
    }
    this.push(this.occurrences);
    callback();
  }

  getOccurrences() {
    return this.occurrences;
  }
}

export default ByteOccurrenceCountStream;
