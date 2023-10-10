
import { Readable, Writable } from 'stream';
import * as fs from 'fs';

const file = fs.createWriteStream('random-' + Date.now() + '.txt');
const initialString = ' dostałem 2 z katkówki sadge :(';

async function* generate() {
  yield initialString + '\n';
  for (let i = 0; i < 20; i++) {
    const random = Math.floor(Math.random() * (-420 - 2137) - 420);
    yield random + '\n';
  }
}

const readable = Readable.from(generate());
readable.on('data', (chunk) => {
  file.write(chunk.toString());
});

readable.on('end', () => {
  file.end();
});