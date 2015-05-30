let Marty = require('marty')
let GithubConstants = require('../constants/githubConstants');

class GithubQueries extends Marty.Queries{
  getFile(path){
    this.dispatch(GithubConstants.RECEIVE_FILE_STARTING, path);
    return this.app.githubApi.getFile(path).then(
      (res) => {
        this.dispatch(GithubConstants.RECEIVE_FILE, res, path);
      }).catch((err) => this.dispatch(GithubConstants.RECEIVE_FILE_FAILED, path, err));
  }
}
export default GithubQueries;
