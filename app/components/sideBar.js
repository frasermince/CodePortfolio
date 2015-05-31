let React = require('react');
let Affix = require('react-bootstrap/lib/Affix');

let styles = {
  position: 'fixed',
  backgroundColor: '#002b36',
  color: '#93a1a1',
  width: 'inherit',
  height: '100%'
}

class SideBar extends React.Component {
  render(){
    return (
      <div style={styles}>
        <h1>{this.props.text}</h1>
      </div>
    )
  }
}

module.exports = SideBar;
