let React = require('react');
let Radium = require('Radium');
let Marty = require('marty');
let CodeActionCreators = require('../actions/codeActionCreators');

let styles = {
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#eee8d5'
  }
}

class Clickable extends React.Component {
  handleClick(){
    let lineNumber = this.props.lineNumber
    this.app.codeActionCreators.clickLine(lineNumber);
  }
  render(){
    return(
      <div onClick={this.handleClick.bind(this)} style={[styles]}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Marty.createContainer(Radium.Enhancer(Clickable));
