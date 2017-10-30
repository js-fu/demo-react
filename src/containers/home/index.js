import React, { Component } from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';

import { Pagination } from 'antd';

const messages = defineMessages({
  hello: {
    id: 'hello', // appLocale中的key
    defaultMessage: 'hhhhh', // 默认值
  }
});

class HomeIndex extends Component {
  render() {
    return (
      <div>
        <Pagination defaultCurrent={1} total={50} showSizeChanger />

        <div>
          <FormattedMessage {...messages.hello} />
        </div>
      </div>
    );
  }
}

export default HomeIndex;