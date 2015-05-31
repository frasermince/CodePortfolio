var React = require('react');
var Route = require('react-router').Route;

module.exports = [
  <Route name="annotations" path="annotations/:path" handler={require('../views/annotation')} />
];
