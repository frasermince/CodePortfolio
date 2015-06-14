let React = require('react');
let Route = require('react-router').Route;

module.exports = [
  <Route name="presentations" path="presentations" handler={require('../views/presentation')} />,
  <Route name="annotations" path="annotations/:path" handler={require('../views/annotation')} />
];
