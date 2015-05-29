let React = require('react');
let Marty = require('marty');
let Router = require('./router');
let Application = require('./Application');
let ApplicationContainer = Marty.ApplicationContainer;

window.React = React; // For React Developer Tools
window.Marty = Marty; // For Marty Developer Tools

if (process.env.NODE_ENV !== 'test') {
  let app = new Application();
  app.rehydrate();
  Router.run((Handler, state) => {
    React.render(
        <ApplicationContainer app={app}>
          <Handler {...state.params} />
        </ApplicationContainer>, document.getElementById('app'));
  });
}
