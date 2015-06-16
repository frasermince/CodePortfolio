let React = require('react');
let Marty = require('marty');

class FileSelector extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    let username = React.findDOMNode(this.refs.username).value
    let project = React.findDOMNode(this.refs.project).value
    let path = React.findDOMNode(this.refs.path).value
    this.app.navigationActionCreators.navigateToCreate(username, project, path);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" defaultValue={this.props.username} placeholder="github username" ref="username" /><br/>
        <input type="text" defaultValue={this.props.project} placeholder="github project" ref="project" /><br/>
        <input type="text" defaultValue={this.props.path} placeholder="github path" ref="path" /><br/>
        <input type="submit"/>
      </form>
    );
  }
}

module.exports = Marty.createContainer(FileSelector);
