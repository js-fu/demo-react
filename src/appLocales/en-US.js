import appLocaleData from 'react-intl/locale-data/en';
import enUS from 'antd/lib/locale-provider/en_US';

const enUSLocale = {
  messages: {
    hello: 'hello~',
    page1: 'page1',
    page2: 'page2',
  },
  antdLocale: enUS,
  intlLocale: 'en-US',
  data: appLocaleData,
};

export default enUSLocale;