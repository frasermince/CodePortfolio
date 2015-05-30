let React = require('react');
let CodeBlock = require('../components/codeBlock');
let SideBar = require('../components/sideBar');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

let secondColumnStyles = {
  paddingLeft: 0,
  paddingRight: 0
}

class Presentation extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3}>
            <SideBar></SideBar>
          </Col>
          <Col style={secondColumnStyles} xs={9}>
            <CodeBlock id={this.props.path}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Presentation;
