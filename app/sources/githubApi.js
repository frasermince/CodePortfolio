let Marty = require('marty');
Marty.HttpStateSource.removeHook('parseJSON');
class GithubApi extends Marty.HttpStateSource {
  constructor(options) {
    super(options);
    this.baseUrl = 'https://api.github.com';
  }
  getFile(path) {
    return this.get(path).then(res =>{
      if (res.ok){
        return res.json();
      }
      throw new Error('Failed to get user');
    });
  }
}

export default GithubApi;
