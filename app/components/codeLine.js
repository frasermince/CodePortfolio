let React = require('react');
let Radium = require('Radium');
let LineNumber = require('./lineNumber');

let tdStyles = {
  base: {
    paddingTop: 0,
    paddingLeft: 5,
    paddingBottom: 0,
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap'
  },
}

let trStyles = {
  base: {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    fontFamily: 'Inconsolata, Consolas, Menlo, Monaco, Lucida Console, Courier New, monospace, serif',
    fontSize: 12
  },
  highlight: {
    backgroundColor: '#eee8d5'
  }
}

class CodeLine extends React.Component{
  render(){
    return(
      <tr
        style={[
          trStyles.base,
          this.props.highlight && trStyles.highlight
        ]}>
        <LineNumber lineNumber={this.props.lineNumber}></LineNumber>
        <td className="code"
          style={[
            tdStyles.base
          ]}>
          {this.props.content}
        </td>
      </tr>
    );
  }
}

module.exports = Radium.Enhancer(CodeLine);
