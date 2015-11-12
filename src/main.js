'use strict';

const React = require('react');
const HelloMessage = require('./components/hello.jsx');


// import { HelloMessage } from './components/hello.jsx';

React.render(<HelloMessage name="John1" />, document.getElementById('app'));