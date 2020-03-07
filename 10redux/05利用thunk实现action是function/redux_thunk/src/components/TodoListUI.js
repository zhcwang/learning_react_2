import React from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
/**
 * 完全分离页面和页面逻辑，大厂用来做页面逻辑和UI的分离开发
 */
/* class TodoListUI extends Component {

    render() {
        return (<div>
            <div style={{ margin: '10px' }}>
                <Input
                    value={this.props.inputValue}
                    style={{ width: '250px', marginRight: '10px' }}
                    onChange={this.props.changeInputValue} />
                <Button type="primary" onClick={this.props.handleClick}>Add</Button>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (
                            <List.Item onClick={(e) => { this.props.handleDelete(e, index) }}>
                                {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
        </div>);
    }
} */

/**
 * 无状态组件
 * 省略了Component ：import React, { Component } from 'react';
 * 省略了状态值，能优化性能
 */
const TodoListUI = (props) => {
    return (<div>
        <div style={{ margin: '10px' }}>
            <Input
                value={props.inputValue}
                style={{ width: '250px', marginRight: '10px' }}
                onChange={props.changeInputValue} />
            <Button type="primary" onClick={props.handleClick}>Add</Button>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={(e) => { props.handleDelete(e, index) }}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
        </div>
    </div>);
}

export default TodoListUI;