let React = require('react');
let Clickable = require('./clickable');
let styles = {
  base: {
    paddingTop: 0,
    paddingLeft: 5,
    paddingBottom: 0,
    wordWrap: 'break-word',
    whiteSpace: 'pre-wrap',
    width: '97%'
  },
}

class LineBody extends React.Component {
  render() {
    return (
      <td className="code"
        style={styles.base}>
        {this.props.createMode ? <Clickable>{this.props.content}</Clickable> : this.props.content}
      </td>
    );
  }
}

module.exports = LineBody;
