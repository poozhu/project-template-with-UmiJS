/**
 * title: 这里定义页面级标题
 */

import React, { Component } from 'react';
import Component1 from '../../components/component1';
import styles from './index.less'

class page2 extends Component {
  render() {
    return (
      <div>
        <div>Page 2</div>
        <Component1 pram={{ a: '我是传递给组件的数据 From Page2/index.jsx' }}></Component1>
      </div>
    );
  }
}

export default page2;
