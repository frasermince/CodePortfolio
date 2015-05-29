var routes = require('./routes');
var Router = require('react-router');

module.exports = Router.create({
  routes: routes,
  location: location()
});

function location() {
  if (typeof window !== 'undefined') {
    return Router.HistoryLocation;
  }
}
