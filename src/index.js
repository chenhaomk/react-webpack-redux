import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component {
  constructor (props) {
    super (props)
    this.state = {

    }
  }
  render () {
    return (
      <div>
        hello
      </div>  
    )
  }
}


ReactDom.render(<Hello />, document.getElementById('app'));