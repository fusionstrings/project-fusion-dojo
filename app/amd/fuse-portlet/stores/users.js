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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFjZSxTQUFTIiwiZmlsZSI6InVzZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1lbW9yeSBmcm9tICdkc3RvcmUvTWVtb3J5JztcclxuaW1wb3J0IG1vZGVsVXNlcnMgZnJvbSAnLi4vbW9kZWxzL3VzZXJzJztcclxuXHJcbmxldCBzdG9yZVVzZXIgPSBuZXcgTWVtb3J5KHtcclxuICAgIG1vZGVsOiBtb2RlbFVzZXJzXHJcbn0pO1xyXG5sZXQgc3UyID0gbW9kZWxVc2VycygpO1xyXG5zdTIuc2V0KHtcclxuICAgIEZpcnN0TmFtZTogMTIzLFxyXG4gICAgTGFzdE5hbWU6ICdvaydcclxufSk7XHJcbmNvbnNvbGUubG9nKCdmdWxsTmFtZScpO1xyXG5zdTIuZ2V0KCdmdWxsTmFtZScpO1xyXG5jb25zb2xlLmxvZyhzdTIpO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVVzZXI7XHJcblxyXG5jb25zb2xlLmluZm8oJ3N0b3JlVXNlciBmcm9tIGZ1c2UtcG9ydGxldC9zdG9yZXMvdXNlcnMnLCBzdG9yZVVzZXIpO1xyXG5jb25zb2xlLmxvZygnZnVzZS1wb3J0bGV0L3N0b3Jlcy91c2VycycpO1xyXG4iXX0=