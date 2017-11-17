import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { FormattedMessage, defineMessages } from 'react-intl';
import { Layout, Menu, Icon } from 'antd';

import Bundle from '../../Bundle';

const { Header, Sider, Content } = Layout;

const messages = defineMessages({
  hello: {
    id: 'hello', // appLocale中的key
    defaultMessage: 'hhhhh', // 默认值
  },
  page1: {
    id: 'page1'
  },
  page2: {
    id: 'page2'
  },
});

const Page1 = (props) => <Bundle load={() => import('./Page1.js')}>{C => <C {...props} />}</Bundle>;
const Page2 = (props) => <Bundle load={() => import('./Page2.js')}>{C => <C {...props} />}</Bundle>;
const Page404 = (props) => <Bundle load={() => import('../../components/Page404.js')}>{C => <C {...props} />}</Bundle>;

class HomeIndex extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      collapsed: false,
      current: props.location.pathname,
    };
  }

  componentDidMount() {
    console.log('home', this);
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  handleClick = (e) => {
    console.log('click ', e.key);

    this.setState({
      current: e.key,
    });

    this.props.history.push({ pathname: e.key });
  }

  selectedNavlink = 'selected-navlink';

  render() {
    const _this = this;
    

    return (
      <div>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{ height: '100vh' }}
            width={180}
          /* onClick={this.onCollapse} */
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" selectedKeys={[`${this.state.current}`]} onClick={this.handleClick}>

              <Menu.Item key="/home/page1">
                <Icon type="user" />
                <FormattedMessage {...messages['page1']} />
              </Menu.Item>

              <Menu.Item key="/home/page2">
                <Icon type="video-camera" />
                <FormattedMessage {...messages['page2']} />
              </Menu.Item>


            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0, height: 48, display: 'flex', justifyContent: 'space-between' }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <Menu
                mode="horizontal"
                style={{ lineHeight: '48px' }}
                onClick={() => { _this.props.history.push('/home') }}
              >
                <Menu.Item key="1" style={{ borderLeft: '1px solid #ededed', borderRight: '1px solid #ededed' }}>申请帮助</Menu.Item>
                <Menu.Item key="2">魏程程</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>

              <Switch>
                <Route exact path="/home" component={() => <div>home</div>} />
                <Route path="/home/page1" component={Page1} />
                <Route path="/home/page2" component={Page2} />
                <Route component={Page404} />
              </Switch>

            </Content>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(HomeIndex);