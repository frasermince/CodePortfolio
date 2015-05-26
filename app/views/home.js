let React = require('react');
let CodeBlock = require('../components/codeBlock');

class Home extends React.Component{
  render(){
    return (
      <div className="home">
      {console.log(this.props.path)}
        <CodeBlock id={this.props.path}></CodeBlock>
      </div>
    );
  }
}

module.exports = Home;
