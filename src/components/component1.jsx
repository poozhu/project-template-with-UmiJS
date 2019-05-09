import React, { Component } from 'react';

class component1 extends Component {

    componentDidMount() {
        console.log(this.props.pram.a);  // 输出路由封装部分所传递的参数
    }

    render() {
        return (
            <div>
                我是一个组件  From component1.jsx
            </div>
        );
    }
}

export default component1;