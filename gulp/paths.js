const appRoot = 'app/';
const outputRoot = 'dist/';
const tmpRoot = '.tmp/';

export default {
  root: appRoot,
  output: outputRoot,
  tmp: tmpRoot,
  serveAltPaths: {
        '/bower_components': 'bower_components',
        '/jspm_packages': 'jspm_packages',
        '/node_modules': 'node_modules',
        '/rest': 'rest',
        '/system.config.js':'system.config.js'
      },
  doc:'./doc'
};
