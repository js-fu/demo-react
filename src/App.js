import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class App extends Component {

  render() {
    return (

      <div>
        <ul>
          <li><Link to={`/`}>blank</Link></li>
          <li><Link to={`/todo-app`}>todo-app</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;