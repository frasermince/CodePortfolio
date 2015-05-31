let Marty = require('marty');

class PresentationStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = [];
    this.handlers = {

    };
  }
  getPresentation(id){
    return this.fetch({
      id: id,
      locally: function() {
        return [{file: 'NQueens.java', line: 30, text: 'This is the text'}, {file: 'Knapsack.java', line: 20, text: 'This is more text'}];
      },
      remotely: function(){
        return [{file: 'NQueens.java', line: 30, text: 'This is the text'}, {file: 'Knapsack.java', line: 20, text: 'This is more text'}];
      }
    });
  }
}

module.exports = PresentationStore;
