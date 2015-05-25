let React = require('react');
let CodeBlock = require('../components/codeBlock');

class Home extends React.Component{
  render(){
    return (
      <div className="home">
        <CodeBlock id="NQueens.java"></CodeBlock>
      </div>
    );
  }
}

module.exports = Home;
