var React = require('react');
var Route = require('react-router').Route;

module.exports = [
  <Route name="presentations" path="presentations/:path" handler={require('../views/presentation')} />
];
