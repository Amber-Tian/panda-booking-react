import React from 'react';
import {Link} from 'react-router-dom';

function NoMatch() {
  return (
    <div>地址错误，页面不存在。<Link to="/">返回首页</Link></div>
  );
}

export default NoMatch