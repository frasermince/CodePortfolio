let Marty = require('marty');

class PresentationStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = [];
    this.handlers = {
    
    };
  }
  getPresentations(){
    return this.fetch({
      id: 1,
      locally: function() {
        return [{name: 'MultiplyMe', id: 1}, {name: 'CodePortfolio', id: 2}]
      },
      remotely: function() {
        return [{name: 'MultiplyMe', id: 1}, {name: 'CodePortfolio', id: 2}]
      }
    });
  }
}

module.exports = PresentationStore;
