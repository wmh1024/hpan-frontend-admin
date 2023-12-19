import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';

const Footer: React.FC = () => {
  const defaultMessage = 'code by wmh';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'wmhwiki',
          title: 'wmhwiki',
          href: 'https://wmhwiki.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wmh1024',
          blankTarget: true,
        },
        {
          key: 'wmhNote',
          title: 'wmhNote',
          href: 'https://note.wmhwiki.cn',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
