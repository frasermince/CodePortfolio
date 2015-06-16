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
    let id = parseInt(this.props.annotationId) - 1;
    let currentAnnotation = this.props.annotations[id];
    return (
      <Grid fluid={true}>
        <Row>
          <Col xs={3}>
            <SideBar annotationId={this.props.annotationId} presentationId={this.props.presentationId} text={currentAnnotation.text}></SideBar>
          </Col>
          <Col style={secondColumnStyles} xs={9}>
            <CodeBlock highlightedLine={currentAnnotation.line} path={currentAnnotation.file.githubPath} project={currentAnnotation.file.githubProject} username={currentAnnotation.file.githubUserName}></CodeBlock>
          </Col>
        </Row>
      </Grid>
    );
  }
}

module.exports = Marty.createContainer(Annotation, {
  listenTo: 'annotationStore',
  fetch: {
    annotations() {
      return this.app.annotationStore.getAnnotation(1);
    }
  },
  failed(errors) {
    return <div className="Annotation-Failed">{errors}</div>
  },
  pending() {
    return this.done({
      annotations: {}
    });
  }
});
