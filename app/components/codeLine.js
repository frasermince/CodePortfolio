let React = require('react');
let LineNumber = require('./lineNumber');

let tdStyles = {
  whiteSpace: 'pre',
  paddingTop: 0,
  paddingLeft: 5,
  paddingBottom: 0
}

let trStyles = {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  fontFamily: 'Inconsolata, Consolas, Menlo, Monaco, Lucida Console, Courier New, monospace, serif',
  fontSize: 13
}

class CodeLine extends React.Component{
  render(){
    return(
      <tr style={trStyles}>
        <LineNumber lineNumber={this.props.lineNumber}></LineNumber>
        <td className="code" style={tdStyles}>{this.props.content}</td>
      </tr>
    );
  }
}

module.exports = CodeLine;
