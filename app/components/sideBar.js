let React = require('react');
let Marty = require('marty');
let Button = require('react-bootstrap/lib/Button');

let styles = {
  position: 'fixed',
  backgroundColor: '#002b36',
  color: '#93a1a1',
  width: 'inherit',
  height: '100%'
}

class SideBar extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h1>{this.props.text}</h1>
        <Button onClick={this.handleClick.bind(this)}>Next</Button>
      </div>
    );
  }
  handleClick(event) {
    let newID = parseInt(this.props.annotationId) + 1;
    this.app.navigationActionCreators.navigateToAnnotation(this.props.annotationId, newID);
  }
}

module.exports = Marty.createContainer(SideBar);
