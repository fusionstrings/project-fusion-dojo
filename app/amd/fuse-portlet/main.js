'use strict';

define(['./controllers/users', 'dojo/_base/config'], function (_users, _config) {
  var _users2 = _interopRequireDefault(_users);

  var _config2 = _interopRequireDefault(_config);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  console.info('fuse-portlet/main', _config2.default.api);
  console.info('a', (0, _users2.default)());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==