'use strict';

define(['exports', '../stores/users'], function (exports, _users) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = addUser;

    var _users2 = _interopRequireDefault(_users);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    function addUser() {
        _users2.default.add({
            FirstName: 'Dilip K',
            LastName: 'Shukla'
        });

        console.info('storeUsers from fuse-portlet/stores/users', _users2.default);
        console.log('fuse-portlet/stores/users');

        _users2.default.forEach(function (user) {
            console.log('storeUsers from fuse-portlet/stores/users', user, user.FirstName, user.LastName, user.fullName);
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztzQkFDd0IsT0FBTzs7Ozs7O2FBQVAsT0FBTyIsImZpbGUiOiJmdXNlLXBvcnRsZXQvY29udHJvbGxlcnMvdXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3RvcmVVc2VycyBmcm9tICcuLi9zdG9yZXMvdXNlcnMnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRVc2VyKCl7ICAgIFxyXG4gICAgc3RvcmVVc2Vycy5hZGQoe1xyXG4gICAgICAgIEZpcnN0TmFtZTogJ0RpbGlwIEsnLFxyXG4gICAgICAgIExhc3ROYW1lOiAnU2h1a2xhJ1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIGNvbnNvbGUuaW5mbygnc3RvcmVVc2VycyBmcm9tIGZ1c2UtcG9ydGxldC9zdG9yZXMvdXNlcnMnLCBzdG9yZVVzZXJzKTtcclxuICAgIGNvbnNvbGUubG9nKCdmdXNlLXBvcnRsZXQvc3RvcmVzL3VzZXJzJyk7XHJcbiAgICAvL2NvbnNvbGUuaW5mbygnbW9kZWxVc2VycycsIG1vZGVsVXNlcnMpO1xyXG4gICAgc3RvcmVVc2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xyXG4gICAgICAgIC8vdXNlci5mdWxsTmFtZS5zZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdG9yZVVzZXJzIGZyb20gZnVzZS1wb3J0bGV0L3N0b3Jlcy91c2VycycsIHVzZXIsIHVzZXIuRmlyc3ROYW1lLCB1c2VyLkxhc3ROYW1lLCB1c2VyLmZ1bGxOYW1lKTtcclxuICAgIH0pO1xyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
