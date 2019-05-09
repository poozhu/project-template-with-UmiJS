import React, { Component } from 'react';
import { connect } from 'dva';


@connect(({ modelPage1 }) => ({
    data: modelPage1.data,  // 取出redux中的各个数据
    num: modelPage1.num,
}))
class page1 extends Component {
    state = {
        data: '我是这里的数据 from Page1/index.jsx',
    };

    componentDidMount() {
        console.log(this.state.data);   // 输出本页面 state数据
        console.log(this.props.data)  // 输出redux中数据
    }

    componentWillUnmount() {

    }

    handleAddAfterGet = () => {
        this.props.dispatch({
            type: 'modelPage1/getdata',
            payload: this.props.num + 1,
        });
    }
    handleAdd = () => {
        this.props.dispatch({
            type: 'modelPage1/save',
            payload: this.props.num + 1,
        });
    }
    render() {
        return (

            <div>
                Page 1
                <div onClick={this.handleAdd}>点我改变Redux中的变量</div>
                <div onClick={this.handleAddAfterGet}>点我在请求完成后改变Redux中的变量</div>
                {this.props.num}
            </div>
        );
    }
}

export default page1;