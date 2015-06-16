let Marty = require('marty');
let Router = require('../router');

var NavigationActionCreators = Marty.createActionCreators({
  displayName: 'Navigation',
  navigateToAnnotation(presentationId, annotationId) {
    navigateTo('annotations', {presentationId: presentationId, annotationId: annotationId});
  },
  navigateToCreate(username, project, path) {
   navigateTo('create', {username: username, project: project, path: path});
  }
});

function navigateTo(route, params) {
  require('../router').transitionTo(route, params || {});
}

module.exports = NavigationActionCreators;
