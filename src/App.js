import React, { Component } from 'react'
import { Switch, Route, withRouter } from 'react-router-dom';
import Bundle from './Bundle';

const HomeIndex = (props) => <Bundle load={() => import('./containers/Home/Index.js')}>{C => <C {...props} />}</Bundle>;

const Page404 = (props) => <Bundle load={() => import('./components/Page404.js')}>{C => <C {...props} />}</Bundle>;
class App extends Component {

  render() {
    return (

      <div>
        <Switch>
          <Route exact path="/" component={props => <div>bolt</div>} />
          <Route path="/home" component={HomeIndex} />
          <Route component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);