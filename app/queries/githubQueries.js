let Marty = require('marty')
Marty.HttpStateSource.removeHook('parseJSON');
let GithubConstants = require('../constants/githubConstants');

class GithubQueries extends Marty.Queries{
  getFile(path){
    this.dispatch(GithubConstants.RECEIVE_FILE_STARTING, path);
    return this.app.githubApi.getFile(path).then(
      (res) => {
        if(res.ok){
          console.log('res', res);
          //console.log('json', res.json());
          this.dispatch(GithubConstants.RECEIVE_FILE, res.json(), path);
        }
        else{
          this.dispatch(GithubConstants.RECEIVE_FILE_FAILED, path)
        }
      }).catch((err) => this.dispatch(GithubConstants.RECEIVE_FILE_FAILED, path, err));
  }
}
export default GithubQueries;
