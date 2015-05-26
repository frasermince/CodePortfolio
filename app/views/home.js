let React = require('react');
let CodeBlock = require('../components/codeBlock');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

class Home extends React.Component{
  render(){
    return (
      <Grid>
        <Row>
          <Col xs={7} xsOffset={5}>
            <CodeBlock id={this.props.path}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Home;
