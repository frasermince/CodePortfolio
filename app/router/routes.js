var React = require('react');
var Route = require('react-router').Route;

module.exports = [
  <Route name="home" path="/:path" handler={require('../views/home')} />
];
