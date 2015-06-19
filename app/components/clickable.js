let React = require('react');
let Radium = require('Radium');
let Marty = require('marty');

let styles = {
  cursor: 'pointer',
  ':hover': {
    backgroundColor: '#eee8d5'
  }
}

class Clickable extends React.Component {
  render(){
    return(
      <div style={[styles]}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = Radium.Enhancer(Clickable);
//Marty.createContainer
