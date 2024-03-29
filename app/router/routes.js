let React = require('react');
let Route = require('react-router').Route;

module.exports = [
  <Route name="presentations" path="presentations" handler={require('../views/presentation')} />,
  <Route name="annotations" path="annotations/:presentationId/:annotationId" handler={require('../views/annotation')} />,
  <Route name ="create" path="create/:username/:project/:path" handler={require('../views/create')} />
];
