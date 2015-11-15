'use strict';

define(['dojo/_base/declare', 'dojo/dom', 'dojo/dom-construct', '../fuse2/es6', '../fuse2', 'dojo', 'react', 'react/react-dom'], function (_declare, _dom, _domConstruct, _es, _fuse, _dojo, _react, _reactDom) {
  var _declare2 = _interopRequireDefault(_declare);

  var _dom2 = _interopRequireDefault(_dom);

  var _domConstruct2 = _interopRequireDefault(_domConstruct);

  var _fuse2 = _interopRequireDefault(_fuse);

  var _dojo2 = _interopRequireDefault(_dojo);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  _reactDom2.default.render(_react2.default.createElement(
    'h1',
    null,
    'Hello, world!'
  ), document.getElementById('example'));

  var Timer = _react2.default.createClass({
    displayName: 'Timer',
    getInitialState: function getInitialState() {
      return {
        secondsElapsed: 0
      };
    },
    tick: function tick() {
      this.setState({
        secondsElapsed: this.state.secondsElapsed + 1
      });
    },
    componentDidMount: function componentDidMount() {
      this.interval = setInterval(this.tick, 1000);
    },
    componentWillUnmount: function componentWillUnmount() {
      clearInterval(this.interval);
    },
    render: function render() {
      return _react2.default.createElement(
        'div',
        null,
        'Seconds Elapsed: ',
        this.state.secondsElapsed
      );
    }
  });

  _reactDom2.default.render(_react2.default.createElement(Timer, null), document.getElementById('tic'));

  console.log('dojo.version fuse', _dojo2.default.version);

  var greetingNode = _dom2.default.byId('greeting');

  _domConstruct2.default.place('<em> Dojo!</em>', greetingNode);

  console.log(_dom2.default.byId('o').innerHTML);
  (0, _es.bootstrap)();
  console.log('fuse loaded');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLjEuanMiLCJzb3VyY2VzQ29udGVudCI6W119