let React = require('react');
let style = {
  textAlign: 'right',
  width: 36,
  height: 20,
  backgroundColor: '#eee8d5',
  paddingLeft: 10,
  paddingRight: 6,
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  msUserSelect: 'none',
  userSelect: 'none'
}

class LineNumber extends React.Component{
  render(){
    return(
      <td className='remove-highlight' style={style}>
        {this.props.lineNumber}
      </td>
    );
  }
}

module.exports = LineNumber;
