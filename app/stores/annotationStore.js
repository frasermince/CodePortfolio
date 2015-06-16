let Marty = require('marty');

class AnnotationStore extends Marty.Store {
  constructor(options) {
    super(options);
    this.state = [];
    this.handlers = {

    };
  }
  getAnnotation(id){
    return this.fetch({
      id: id,
      locally: function() {
        return [{file: {githubProject: 'genetic', githubUserName: 'frasermince', githubPath: 'NQueens.java'}, line: 30, text: 'This is the text'}, {file: {githubProject: 'genetic', githubUserName: 'frasermince', githubPath: 'Knapsack.java'}, line: 20, text: 'This is more text'}];
      },
      remotely: function() {
        return [{file: {githubProject: 'genetic', githubUserName: 'frasermince', githubPath: 'NQueens.java'}, line: 30, text: 'This is the text'}, {file: {githubProject: 'genetic', githubUserName: 'frasermince', githubPath: 'Knapsack.java'}, line: 20, text: 'This is more text'}];
      }
    });
  }
}

module.exports = AnnotationStore;
