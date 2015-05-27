let React = require('react');
let CodeBlock = require('../components/codeBlock');
let AnnotationBlock = require('../components/annotationBlock');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

class Home extends React.Component {
  render() {
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={5}>
            <AnnotationBlock></AnnotationBlock>
          </Col>
          <Col xs={7}>
            <CodeBlock id={this.props.path}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Home;
