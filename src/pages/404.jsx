import React, { Component } from 'react';
import router from 'umi/router';

class error extends Component {

  componentWillMount() {
    setTimeout(() => {
      router.push('/');
    }, 2000)
  }

  render() {
    return (
      <div>
        404,即将跳转到首页
      </div>
    );
  }
}

export default error;
