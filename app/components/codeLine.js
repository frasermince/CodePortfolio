let React = require('react');

let tdStyles = {
  whiteSpace: 'pre',
  paddingTop: 0,
  paddingBottom: 0
}

let trStyles = {
  paddingTop: 0,
  paddingBottom: 0,
  fontFamily: 'Inconsolata, Consolas, Menlo, Monaco, Lucida Console, Courier New, monospace, serif',
  fontSize: 13
}

class CodeLine extends React.Component{
  render(){
    return(
      <tr style={trStyles}>
        <td className="code" style={tdStyles}>{this.props.content}</td>
      </tr>
    );
  }
}

module.exports = CodeLine;
