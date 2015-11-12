'use strict';

const React = require('react');

var HelloMessage = React.createClass({
  render (){
    return (
      <div>Hello {this.props.name}</div>
    );
  }
});

module.exports = HelloMessage;