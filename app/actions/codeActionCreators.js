let Marty = require('marty');
let CodeConstants = require('../constants/codeConstants');

class CodeActionCreators extends Marty.ActionCreators {
  clickLine(lineNumber) {
    this.dispatch(CodeConstants.CLICK_LINE, lineNumber);
  }
}

module.exports = CodeActionCreators;
