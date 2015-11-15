
import main from 'dojo';
console.log('dojo.version fuse2', main.version);
export class Hello {
  constructor() {}
  world() {
    console.log('world returned');
    return 'world';
  }
}

export function bootstrap() {
  // bootstrap code here
  console.log('ES6 module called');
}
