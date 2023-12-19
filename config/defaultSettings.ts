import { Settings as LayoutSettings } from '@ant-design/pro-components';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'top',
  contentWidth: 'Fixed',
  fixedHeader: true,
  fixSiderbar: true,
  pwa: false,
  title: 'hpan后台管理',
  logo: 'https://pic.imgdb.cn/item/65810c20c458853aef07bdab.png',
  headerHeight: 48,
  splitMenus: false,
};

export default Settings;
