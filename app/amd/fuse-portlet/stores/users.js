'use strict';

define(['dstore/Memory', '../models/users'], function (_Memory, _users) {
    var _Memory2 = _interopRequireDefault(_Memory);

    var _users2 = _interopRequireDefault(_users);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var x = 'ff';
    var dummyStore = new _Memory2.default({
        model: _users2.default
    });
    console.info('dummyStore', dummyStore);
    dummyStore.add({
        FirstName: 'Dilipk',
        LastName: 'Shukla'
    });
    console.info('dummyStore', dummyStore);
    var fn = dummyStore.data.property('Dilipk');
    var dummyStore2 = new _Memory2.default();
    dummyStore2.add({
        FirstName: 'Dilip',
        LastName: 'Shukla'
    });
    console.info('dummyStore2', dummyStore2);
    dummyStore.forEach(function (user) {
        console.log(user, user.FirstName, user.LastName, user.fullName);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=