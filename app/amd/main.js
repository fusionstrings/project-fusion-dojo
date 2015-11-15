'use strict';

define(['dojo/dom', 'dojo/dom-construct', 'dojo'], function (_dom, _domConstruct, _dojo) {
        var _dom2 = _interopRequireDefault(_dom);

        var _domConstruct2 = _interopRequireDefault(_domConstruct);

        var dojo = _interopRequireWildcard(_dojo);

        function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

        console.log('dojo.version main', dojo.version);

        var greetingNode = _dom2.default.byId('greeting');

        _domConstruct2.default.place('<em> Dojo!</em>', greetingNode);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOltdfQ==