let Marty = require('marty');
let Immutable = require('immutable');
let GithubConstants = require('../constants/githubConstants');
let atob = require('atob')
let _ = require('lodash');

class CodeStore extends Marty.Store{
  constructor(options){
    super(options);
    this.state = [];
    this.handlers = {
      setFile: GithubConstants.RECEIVE_FILE
    };
  }
  setFile(file, path){
    let filetype = _.words(file.name, /[^.]+/g).pop();
    let decrypted = atob(file.content);
    let lines = _.words(decrypted, /[^\r\n]+/g);
    this.state[path] = {lines: lines, filetype: filetype};
    this.hasChanged();
  }
  getFile(path){
    return this.fetch({
      id: path,
      locally: function(){
        return this.state[path];
      },
      remotely: function(){
        return this.app.githubQueries.getFile(path);
      }
    });
  }
}

export default CodeStore;
