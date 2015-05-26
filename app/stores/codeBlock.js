let Marty = require('marty');
let Immutable = require('immutable');
let GithubConstants = require('../constants/githubConstants');
let GithubQueries = require('../queries/githubQueries');
let _ = require('lodash');
class CodeBlockStore extends Marty.Store{
  constructor(options){
    super(options);
    this.state = [];
    this.handlers = {
      setFile: GithubConstants.RECEIVE_FILE
    };
  }
  setFile(file){
    let filetype = _.words(file.name, /[^.]+/g).pop();
    let decrypted = atob(file.content);
    let lines = _.words(decrypted, /[^\r\n]+/g);
    this.state[file.path] = {lines: lines, filetype: filetype};
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
