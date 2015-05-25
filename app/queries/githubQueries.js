let Marty = require('marty');
let GithubConstants = require('../constants/githubConstants');
let GithubApi = require('../sources/githubApi');

class GithubQueries extends Marty.Queries{
  getFile(path){
    this.dispatch(GithubConstants.RECEIVE_FILE_STARTING, path);
    return GithubApi.getFile(path).then(
      res => {
        if(res.status == 200){
          this.dispatch(GithubConstants.RECEIVE_FILE, res.body, path);
        }
        else{
          this.dispatch(GithubConstants.RECEIVE_FILE_FAILED, path)
        }
      },
      err => this.dispatch(GithubConstants.RECEIVE_FILE_FAILED, path, err)
    );
  }
}
export default Marty.register(GithubQueries);
