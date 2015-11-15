'use strict';

define(['exports', 'dojo'], function (exports, _dojo) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Hello = undefined;
  exports.bootstrap = bootstrap;

  var _dojo2 = _interopRequireDefault(_dojo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  console.log('dojo.version fuse2', _dojo2.default.version);

  var Hello = exports.Hello = (function () {
    function Hello() {
      _classCallCheck(this, Hello);
    }

    _createClass(Hello, [{
      key: 'world',
      value: function world() {
        console.log('world returned');
        return 'world';
      }
    }]);

    return Hello;
  })();

  function bootstrap() {
    console.log('ES6 module called');
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzNi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1VBV2dCLFNBQVMsR0FBVCxTQUFTOzs7Ozs7Ozs7Ozs7TUFSWixLQUFLLFdBQUwsS0FBSztBQUNoQixhQURXLEtBQUssR0FDRjs0QkFESCxLQUFLO0tBQ0E7O2lCQURMLEtBQUs7OzhCQUVSO0FBQ04sZUFBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzlCLGVBQU8sT0FBTyxDQUFDO09BQ2hCOzs7V0FMVSxLQUFLOzs7V0FRRixTQUFTIiwiZmlsZSI6ImVzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgbWFpbiBmcm9tICdkb2pvJztcclxuY29uc29sZS5sb2coJ2Rvam8udmVyc2lvbiBmdXNlMicsIG1haW4udmVyc2lvbik7XHJcbmV4cG9ydCBjbGFzcyBIZWxsbyB7XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG4gIHdvcmxkKCkge1xyXG4gICAgY29uc29sZS5sb2coJ3dvcmxkIHJldHVybmVkJyk7XHJcbiAgICByZXR1cm4gJ3dvcmxkJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXAoKSB7XHJcbiAgLy8gYm9vdHN0cmFwIGNvZGUgaGVyZVxyXG4gIGNvbnNvbGUubG9nKCdFUzYgbW9kdWxlIGNhbGxlZCcpO1xyXG59XHJcbiJdfQ==