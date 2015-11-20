import Memory from 'dstore/Memory';
import modelUsers from '../models/users';

let storeUser = new Memory({
    model: modelUsers
});
let su2 = modelUsers();
su2.set({
    FirstName: 123,
    LastName: 'ok'
});
console.log('fullName');
su2.get('fullName');
console.log(su2);
export default storeUser;

console.info('storeUser from fuse-portlet/stores/users', storeUser);
console.log('fuse-portlet/stores/users');
