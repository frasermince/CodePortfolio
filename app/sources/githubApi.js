let Marty = require('marty');
class GithubApi extends Marty.HttpStateSource {
  constructor(options) {
    super(options);
    this.baseUrl = 'https://api.github.com';
  }
  getFile(path) {
    return this.get('/repos/frasermince/genetic/contents/' + path);
  }
}

export default GithubApi;
