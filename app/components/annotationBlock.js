let React = require('react');
let Affix = require('react-bootstrap/lib/Affix');

let styles = {
  position: 'fixed',
  backgroundColor: '#002b36',
  color: '#93a1a1',
  width: 'inherit',
  height: '100%'
}

class AnnotationBlock extends React.Component {
  render(){
    return (
      <div style={styles}>
        <h1>HERE</h1>
      </div>
    )
  }
}

module.exports = AnnotationBlock;
