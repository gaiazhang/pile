import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="pile-home">
    <div className="pile-home-main">
      <h1>Pile.js</h1>
      <h2>设计、前端高效协同，快速搭建移动端组件库</h2>
      <div className="version-links">
        <a href="//didi.github.io/pile.js/docs/" target="_blank">1.x</a>
        |
        <a href={`//${window.location.host}/components/introduce`}>2.x</a>
      </div>
    </div>
    <div className="pile-home-footer">Copyright © 2012-2019 Didi Chuxing. All Rights Reserved</div>
  </div>
);

export default Home;
