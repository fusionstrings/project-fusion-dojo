import Memory from 'dstore/Memory';
import modelUsers from '../models/users';
let x = 'ff';
let dummyStore = new Memory({
    model: modelUsers
});

console.info('dummyStore', dummyStore);

dummyStore.add({
    FirstName: 'Dilipk',
    LastName: 'Shukla'
});
console.info('dummyStore', dummyStore);
let fn = dummyStore.data.property('Dilipk');
let dummyStore2 = new Memory();

dummyStore2.add({
    FirstName: 'Dilip',
    LastName: 'Shukla'
});
console.info('dummyStore2', dummyStore2);

//console.info('modelUsers', modelUsers);
dummyStore.forEach(user => {
    //user.fullName.setValue();
    console.log(user, user.FirstName, user.LastName, user.fullName);
});