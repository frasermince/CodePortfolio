let Marty = require('marty');

let Application = Marty.createApplication(function () {
  this.register(require('./actions'));
  this.register(require('./queries'));
  this.register(require('./sources'));
  this.register(require('./stores'));
  this.router = require('./router');
});

module.exports = Application;
