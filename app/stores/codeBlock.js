let Marty = require('marty');
let Immutable = require('immutable');
let GithubConstants = require('../constants/githubConstants');
let GithubQueries = require('../queries/githubQueries');
class CodeBlockStore extends Marty.Store{
  constructor(options){
    super(options);
    this.state = [];
    this.handlers = {
      setFile: GithubConstants.RECEIVE_FILE
    };
  }
  setFile(file){
    this.state[file.path] = atob(file.content);
    this.hasChanged();
  }
  getFile(path){
    return this.fetch({
      id: path,
      locally: function(){
        return this.state[path];
      },
      remotely: function(){
        return GithubQueries.for(this).getFile(path);
      }
    });
  }
}

export default Marty.register(CodeBlockStore);
