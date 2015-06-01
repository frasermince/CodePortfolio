let React = require('react');
let Marty = require('Marty');
let CodeBlock = require('../components/codeBlock');
let SideBar = require('../components/sideBar');
let Grid = require('react-bootstrap/lib/Grid');
let Col = require('react-bootstrap/lib/Col');
let Row = require('react-bootstrap/lib/Row');

let secondColumnStyles = {
  paddingLeft: 0,
  paddingRight: 0
}

class Annotation extends React.Component {
  render() {
    let id = parseInt(this.props.path) - 1;
    let currentAnnotation = this.props.presentation[id];
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3}>
            <SideBar path={this.props.path} text={currentAnnotation.text}></SideBar>
          </Col>
          <Col style={secondColumnStyles} xs={9}>
            <CodeBlock highlightedLine={currentAnnotation.line} file={currentAnnotation.file}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Marty.createContainer(Annotation, {
  listenTo: 'presentationStore',
  fetch: {
    presentation() {
      return this.app.presentationStore.getPresentation(1);
    }
  },
  failed(errors) {
    return <div className="Presentation-Failed">{errors}</div>
  },
  pending() {
    return this.done({
      presentation: {}
    });
  }
});
