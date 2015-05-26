let React = require('react');
let Marty = require('marty');
let CodeBlockStore = require('../stores/codeBlock');
let hljs = require('highlight.js');
let _ = require('lodash');
let CodeLine = require('./codeLine');

class CodeBlock extends React.Component {
  render() {
    return (
      <table>
        {_.map(this.props.file.lines, function(line){
          return <CodeLine content={line}></CodeLine>;
        })}
      </table>
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
      let nodes = domNode.querySelectorAll('table tr');
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
