let React = require('react');
let Marty = require('marty');
let CodeStore = require('../stores/codeStore');
let hljs = require('highlight.js');
let _ = require('lodash');
let CodeLine = require('./codeLine');

let styles = {
  tableLayout: 'fixed',
  width: '100%'
}

class CodeBlock extends React.Component {
  render() {
    return (
      <table style={styles}>
        {_.map(this.props.file.lines, (line, index) => {
          return <CodeLine highlight={index + 1 == this.props.highlightedLine} lineNumber={index + 1} content={line}></CodeLine>;
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
  listenTo: ['codeStore'],
  fetch: {
    file() {
      return this.app.codeStore.getFile(this.props.file);
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
