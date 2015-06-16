let React = require('react');
let FileSelector = require('../components/fileSelector');
let CodeBlock = require('../components/codeBlock');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

class Create extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Col xs={3}>
          <FileSelector username={this.props.username} project={this.props.project} path={this.props.path}></FileSelector>
        </Col>
        <Col xs={9}>
          <CodeBlock username={this.props.username} project={this.props.project} path={this.props.path} createMode={true}></CodeBlock>
        </Col>
      </Grid>
    );
  }
}

module.exports = Create;
