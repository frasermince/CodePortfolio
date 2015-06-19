let React = require('react');
let Radium = require('Radium');
let LineNumber = require('./lineNumber');
let Clickable = require('./clickable');
let LineBody = require('./lineBody');


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

class CodeLine extends React.Component {
  render() {
    return (
      <tr
        className={this.props.highlight ? 'selected' : 'not-selected'}
        style={[
          trStyles.base,
          this.props.highlight && trStyles.highlight
        ]}>
        <LineNumber lineNumber={this.props.lineNumber}></LineNumber>
        <LineBody lineNumber={this.props.lineNumber} content={this.props.content} createMode={this.props.createMode}></LineBody>
      </tr>
    );
  }
}

module.exports = Radium.Enhancer(CodeLine);
