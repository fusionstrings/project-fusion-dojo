import declare from 'dojo/_base/declare';
import dom from 'dojo/dom';
import domConstruct from 'dojo/dom-construct';
import {bootstrap} from '../fuse2/es6';
import f2 from '../fuse2';
import main from 'dojo';

import React from 'react'
// import only the render function of react-dom using ES2015 destructuring
import ReactDom from 'react/react-dom'

ReactDom.render(
  <h1>Hello, world!</h1>,
  document.getElementById('example')
);

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDom.render(<Timer />, document.getElementById('tic'));

console.log('dojo.version fuse', main.version);
let greetingNode = dom.byId('greeting');

domConstruct.place('<em> Dojo!</em>', greetingNode);
console.log(dom.byId('o').innerHTML);
bootstrap();
console.log('fuse loaded');