import storeUsers from '../stores/users';
export default function addUser(){    
    storeUsers.add({
        FirstName: 'Dilip K',
        LastName: 'Shukla'
    });
    
    console.info('storeUsers from fuse-portlet/stores/users', storeUsers);
    console.log('fuse-portlet/stores/users');
    //console.info('modelUsers', modelUsers);
    storeUsers.forEach(user => {
        //user.fullName.setValue();
        console.log('storeUsers from fuse-portlet/stores/users', user, user.FirstName, user.LastName, user.fullName);
    });
}