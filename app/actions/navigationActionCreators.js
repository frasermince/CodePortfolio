let Marty = require('marty');
let Router = require('../router');

var NavigationActionCreators = Marty.createActionCreators({
  displayName: 'Navigation',
  navigateToAnnotation(id) {
    navigateTo('annotations', {path: id});
  }
});

function navigateTo(route, params) {
  require('../router').transitionTo(route, params || {});
}

module.exports = NavigationActionCreators;
