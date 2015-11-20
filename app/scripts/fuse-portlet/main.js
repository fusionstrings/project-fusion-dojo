import add from './controllers/users';
import config from 'dojo/_base/config';

console.info('fuse-portlet/main', config.api);
console.info('a', add());
//add();