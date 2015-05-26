let React = require('react');
let Marty = require('marty');
let CodeBlockStore = require('../stores/codeBlock');
let hljs = require('highlight.js');
let _ = require('lodash');
//let Highlight = require('react-highlight');
//let CodeMirror = React.createFactory(require('codemirror'));
let i = '{}';

class CodeBlock extends React.Component {
  render() {
    return (
      <pre>
        <code>
            {this.props.file}
        </code>
      </pre>
    );
  }
  componentDidMount(){
    this.highlightCode();
  }
  componentDidUpdate(){
    this.highlightCode();
  }
  highlightCode() {
    if(!_.isEmpty(this.props.file)){
      let domNode = React.findDOMNode(this);
      let nodes = domNode.querySelectorAll('pre code');
      if (nodes.length > 0) {
        for (let i = 0; i < nodes.length; i = i + 1) {
          hljs.highlightBlock(nodes[i]);
        }
      }
    }
  }
}

module.exports = Marty.createContainer(CodeBlock, {
  listenTo: CodeBlockStore,
  fetch: {
    file() {
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
