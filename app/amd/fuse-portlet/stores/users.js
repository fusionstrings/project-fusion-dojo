'use strict';

define(['exports', 'dstore/Memory', '../models/users'], function (exports, _Memory, _users) {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _Memory2 = _interopRequireDefault(_Memory);

    var _users2 = _interopRequireDefault(_users);

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

    var storeUser = new _Memory2.default({
        model: _users2.default
    });
    var su2 = (0, _users2.default)();
    su2.set({
        FirstName: 123,
        LastName: 'ok'
    });
    console.log('fullName');
    su2.get('fullName');
    console.log(su2);
    exports.default = storeUser;
    console.info('storeUser from fuse-portlet/stores/users', storeUser);
    console.log('fuse-portlet/stores/users');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFjZSxTQUFTIiwiZmlsZSI6ImZ1c2UtcG9ydGxldC9zdG9yZXMvdXNlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWVtb3J5IGZyb20gJ2RzdG9yZS9NZW1vcnknO1xyXG5pbXBvcnQgbW9kZWxVc2VycyBmcm9tICcuLi9tb2RlbHMvdXNlcnMnO1xyXG5cclxubGV0IHN0b3JlVXNlciA9IG5ldyBNZW1vcnkoe1xyXG4gICAgbW9kZWw6IG1vZGVsVXNlcnNcclxufSk7XHJcbmxldCBzdTIgPSBtb2RlbFVzZXJzKCk7XHJcbnN1Mi5zZXQoe1xyXG4gICAgRmlyc3ROYW1lOiAxMjMsXHJcbiAgICBMYXN0TmFtZTogJ29rJ1xyXG59KTtcclxuY29uc29sZS5sb2coJ2Z1bGxOYW1lJyk7XHJcbnN1Mi5nZXQoJ2Z1bGxOYW1lJyk7XHJcbmNvbnNvbGUubG9nKHN1Mik7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlVXNlcjtcclxuXHJcbmNvbnNvbGUuaW5mbygnc3RvcmVVc2VyIGZyb20gZnVzZS1wb3J0bGV0L3N0b3Jlcy91c2VycycsIHN0b3JlVXNlcik7XHJcbmNvbnNvbGUubG9nKCdmdXNlLXBvcnRsZXQvc3RvcmVzL3VzZXJzJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
