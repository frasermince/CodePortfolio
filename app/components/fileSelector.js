let React = require('react');

class FileSelector extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.props.username} placeholder="github username"/><br/>
        <input type="text" value={this.props.project} placeholder="github project"/><br/>
        <input type="text" value={this.props.path} placeholder="github file"/><br/>
        <input type="submit"/>
      </form>
    );
  }
}

module.exports = FileSelector;
