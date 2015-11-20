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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztzQkFDd0IsT0FBTzs7Ozs7O2FBQVAsT0FBTyIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdG9yZVVzZXJzIGZyb20gJy4uL3N0b3Jlcy91c2Vycyc7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZFVzZXIoKXsgICAgXHJcbiAgICBzdG9yZVVzZXJzLmFkZCh7XHJcbiAgICAgICAgRmlyc3ROYW1lOiAnRGlsaXAgSycsXHJcbiAgICAgICAgTGFzdE5hbWU6ICdTaHVrbGEnXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgY29uc29sZS5pbmZvKCdzdG9yZVVzZXJzIGZyb20gZnVzZS1wb3J0bGV0L3N0b3Jlcy91c2VycycsIHN0b3JlVXNlcnMpO1xyXG4gICAgY29uc29sZS5sb2coJ2Z1c2UtcG9ydGxldC9zdG9yZXMvdXNlcnMnKTtcclxuICAgIC8vY29uc29sZS5pbmZvKCdtb2RlbFVzZXJzJywgbW9kZWxVc2Vycyk7XHJcbiAgICBzdG9yZVVzZXJzLmZvckVhY2godXNlciA9PiB7XHJcbiAgICAgICAgLy91c2VyLmZ1bGxOYW1lLnNldFZhbHVlKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N0b3JlVXNlcnMgZnJvbSBmdXNlLXBvcnRsZXQvc3RvcmVzL3VzZXJzJywgdXNlciwgdXNlci5GaXJzdE5hbWUsIHVzZXIuTGFzdE5hbWUsIHVzZXIuZnVsbE5hbWUpO1xyXG4gICAgfSk7XHJcbn0iXX0=