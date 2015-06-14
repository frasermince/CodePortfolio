let Marty = require('marty');
let Router = require('../router');

var NavigationActionCreators = Marty.createActionCreators({
  displayName: 'Navigation',
  navigateToAnnotation(presentationId, annotationId) {
    navigateTo('annotations', {presentationId: presentationId, annotationId: annotationId});
  }
});

function navigateTo(route, params) {
  require('../router').transitionTo(route, params || {});
}

module.exports = NavigationActionCreators;
