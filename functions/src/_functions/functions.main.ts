import * as glob from 'glob';

const suffix = '.functions.ts';

const files = glob.sync('./**/*.function.[jt]s', { cwd: __dirname });

const functions = new Map<string, any>();

files.forEach(file => {
  const name = file
    .split('/')
    .pop()
    ?.slice(0, -suffix.length + 1);

  if (name !== undefined) {
    functions.set(name, require(file));
  }
});

export default functions;
