let React = require('react');
let Marty = require('Marty');
let _ = require('lodash');
let ReactRouterBootstrap = require('react-router-bootstrap');
let ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;
let ListGroup = require('react-bootstrap').ListGroup;
let Button = require('react-bootstrap').Button;

class Presentation extends React.Component {
  render(){
    return(
      <div>
        <ListGroup>
          {_.map(this.props.presentations, (presentation) => {
             return(
                 <ListGroupItemLink to="annotations" params={{presentationId: presentation.id, annotationId: 1}}>
                   {presentation.name}
                 </ListGroupItemLink>);
          })}
        </ListGroup>
        <Button bsStyle="primary">Create</Button>
      </div>
    );
  }
}

module.exports = Marty.createContainer(Presentation, {
  listenTo: 'presentationStore',
  fetch: {
    presentations() {
      return this.app.presentationStore.getPresentations();
    },
    failed(errors) {
      return <div className="Presentation-Failed">{errors}</div>
    },
    pending() {
      return this.done({
        presentations: {}
      });
    }
  }
});
