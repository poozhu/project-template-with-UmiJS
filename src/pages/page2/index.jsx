import React, { Component } from 'react';
import Component1 from '../../components/component1';

class page2 extends Component {
    render() {
        return (
            <div>
                Page 2
                <Component1 pram={{a:'我是传递给组件的数据 From Page2/index.jsx'}}></Component1>
            </div>
        );
    }
}

export default page2;