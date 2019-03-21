import * as React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Routes from './roots/routes';

import '../../packages/theme-default/lib/index.css';
import './app.css';
import './prism.css';
import './prism.js';

const navList = [
  /*   { label: '主题', nodeName: 'h2', link: 'components/theme' },
    { label: '多语言', nodeName: 'h2', link: 'components/language' }, */
  { label: '介绍', nodeName: 'h2', link: 'components/introduce' },
  { label: 'components', nodeName: 'un-links', link: '' },
  {
    label: '',
    nodeName: 'ul',
    link: '',
    list: [
      { label: 'Button', nodeName: 'li', link: 'components/button' },
      { label: 'Icon', nodeName: 'li', link: 'components/icon' },
      { label: 'Switch', nodeName: 'li', link: 'components/switch' },
      { label: 'InputFiled', nodeName: 'li', link: 'components/inputFiled' },
      { label: 'Radio', nodeName: 'li', link: 'components/radio' },
      { label: 'Alert', nodeName: 'li', link: 'components/alert' },
      {
        label: '交互',
        nodeName: 'dl',
        link: '',
        list: [{ label: 'Toast', nodeName: 'dd', link: 'components/toast' }],
      },
    ],
  },
];

// 当前页卡展示
let curnav = 'index';

function changeLink(e) {
  curnav = e;
}
// 侧边栏 分类展示
const navH2 = (re, curnav) => (
  <h2 className={`links ${re.link == curnav ? 'actived' : ''}`}>
    <Link
      to={`/${re.link}`}
      onClick={() => {
        changeLink(re.link);
      }}
    >
      {re.label}
    </Link>
  </h2>
);

const navUnlinks = re => <h2 className="un-links">{re.label}</h2>;

const navUl = (re, curnav) => (
  <ul className="arc-list">
    {re.list.map((item, index) => {
      if (item.nodeName === 'li') {
        return (
          <li className={`links ${item.link == curnav ? 'actived' : ''}`}>
            <Link
              to={`/${item.link}`}
              onClick={() => {
                changeLink(item.link);
              }}
            >
              {item.label}
            </Link>
          </li>
        );
      }
      if (item.nodeName === 'dl') {
        return (
          <li className="sec-nav">
            <dl>
              <dt>{item.label}</dt>
              {item.list.map(rem => (
                <dd className={`links ${rem.link == curnav ? 'actived' : ''}`}>
                  <Link
                    to={`/${rem.link}`}
                    onClick={() => {
                      changeLink(rem.link);
                    }}
                  >
                    {rem.label}
                  </Link>
                </dd>
              ))}
            </dl>
          </li>
        );
      }
    })}
  </ul>
);

const App = (props) => {
  curnav = props.location.pathname
  if (curnav === 'index' || curnav === '/' || curnav === '/index') {
    return (
      <div className="pile-note-index">
        <Routes />
      </div>
    );
  }
  if (curnav.includes('components')) {
    return (
      <div className="app-note">
        <div className="note-header clearfix">
          <h1 className="trademark fl">Pile docs</h1>
          <nav className="note-nav fr clearfix">
            <ul className="clearfix note-nav-items">
              <li>
                <Link
                  to="/index"
                >
                  <span>首页</span>
                </Link>
              </li>
              <li className={curnav.includes('design') ? 'actived' : ''}>
                <a>
                  <span>设计</span>
                </a>
              </li>
              <li className={curnav.includes('components') ? 'actived' : ''}>
                <Link
                  to="introduce"
                  onClick={() => {
                    changeLink('components/introduce');
                  }}
                >
                  <span>组件</span>
                </Link>
              </li>
              <li />
            </ul>
            <div className="change-version">
              <div className="note-v">2.x</div>
              <div className="note-old-v">
                <a href="//didi.github.io/pile.js/1.x/docs/" target="_blank">
                  1.x
                </a>
              </div>
            </div>

            <a
              href="//github.com/didi/pile.js"
              target="_blank"
              className="nav-links-github"
            >
              <span>github</span>
            </a>
          </nav>
        </div>
        <div className="note-main">
          {curnav.includes('components') && (
            <div className="note-sidebar">
              {navList.map((re, index) => {
                if (re.nodeName === 'h2') {
                  return navH2(re, curnav);
                }
                if (re.nodeName === 'un-links') {
                  return navUnlinks(re);
                }
                if (re.nodeName === 'ul') {
                  return navUl(re, curnav);
                }
              })}
            </div>
          )}
          <div className="note-content">
            <Routes />
          </div>
        </div>
        <div className="note-footer">
          <div className="footer-links">
            <dl className="f-links-item">
              <dt>相关资源</dt>
              <dd>
                <a href="//github.com/didi/pile.js" target="_blank">
                  GitHub
                </a>
              </dd>
              <dd>
                <a href="javascript:;">更新日志</a>
              </dd>
              <dd>
                <a href="javascript:;">常见问题</a>
              </dd>
              <dd>
                <a href="javascript:;">调色板</a>
              </dd>
            </dl>

            <dl className="f-links-item">
              <dt>社区</dt>
              <dd>
                <a href="javascript:;">问题反馈</a>
              </dd>
              <dd>
                <a href="javascript:;">文字列表</a>
              </dd>
            </dl>

            <dl className="f-links-item">
              <dt>相关资源</dt>
              <dd>
                <a href="//github.com/didi/cube-ui" target="_blank">
                  Cube UI
                  <span>- Vue.js组件库</span>
                </a>
              </dd>
              <dd>
                <a href="//github.com/didi/DoraemonKit" target="_blank">
                  DoraemonKit
                  <span>- iOS开发助手</span>
                </a>
              </dd>
              <dd>
                <a href="//github.com/didi/VirtualAPK" target="_blank">
                  VirtualAPK
                  <span>- Android插件化框架</span>
                </a>
              </dd>
            </dl>
          </div>
          <div className="version-msg">
            <div className="version-bd">
              版权所有© 2012-2019滴滴出行。版权所有
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(App);
