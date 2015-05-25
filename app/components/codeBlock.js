let React = require('react');
let Marty = require('marty');
let CodeBlockStore = require('../stores/codeBlock');
//let CodeMirror = React.createFactory(require('codemirror'));
let i = '{}';

class CodeBlock extends React.Component{
  render(){
    return (
      <code>
        {this.props.file}
      </code>
    );
  }
}

module.exports = Marty.createContainer(CodeBlock, {
  listenTo: CodeBlockStore,
  fetch: {
    file() {
      console.log(this.props);
      return CodeBlockStore.for(this).getFile(this.props.id);
    }
  },
  failed(errors) {
    return <div className="code-block-failed">{errors}</div>;
  },
  pending() {
    return this.done({
      file: {}
    });
  }
});
