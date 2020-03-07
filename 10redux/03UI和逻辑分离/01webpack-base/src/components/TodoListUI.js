import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd';
/**
 * 完全分离页面和页面逻辑，大厂用来做页面逻辑和UI的分离开发
 */
class TodoListUI extends Component {

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
}

export default TodoListUI;