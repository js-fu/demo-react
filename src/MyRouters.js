import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Bundle from './Bundle';

const App = (props) => (
  <Bundle load={() => import("./App")}>
    {(App) => <App {...props} />}
  </Bundle>
);

const TodoApp = (props) => (
  <Bundle load={() => import("./containers/TodoApp")}>
    {(TodoApp) => <TodoApp {...props} />}
  </Bundle>
);

const HomeIndex = (props) => (
  <Bundle load={() => import("./containers/home")}>
    {(HomeIndex) => <HomeIndex {...props} />}
  </Bundle>
);


export default class extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Route path="/" component={App} />
          <Route path="/todo-app" component={TodoApp} />

          <Route path="/home" component={HomeIndex} />
        </div>
      </Router>
    );
  }

}