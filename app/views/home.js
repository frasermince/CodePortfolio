let React = require('react');
let CodeBlock = require('../components/codeBlock');
let AnnotationBlock = require('../components/annotationBlock');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

let secondColumnStyles = {
  paddingLeft: 10,
  paddingRight: 0
}

class Home extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3}>
            <AnnotationBlock></AnnotationBlock>
          </Col>
          <Col style={secondColumnStyles} xs={9}>
            <CodeBlock id={this.props.path}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Home;
