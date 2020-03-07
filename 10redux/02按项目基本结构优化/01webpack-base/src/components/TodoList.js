import React, { Component } from 'react';
import 'antd/dist/antd.css'
import { Input, Button } from 'antd';
import { List } from 'antd';
import store from '@/store'
import {getChangeInputAction, getAddItemAction, getDeleteItemAction} from '@/store/actionFactory'

const data = [
    '早8点开晨会',
    '早9点开需求沟通会'
]

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        // store 订阅state改变并处罚自己的重置state方法
        store.subscribe(() => this.setState(store.getState()))
    }

    changeInputValue = (e) => {
        store.dispatch(getChangeInputAction(e.target.value))
    }

    handleClick = () => {
        store.dispatch(getAddItemAction())
    }

    handleDelete = (index) => {
        // dispath action to store
        store.dispatch(getDeleteItemAction(index))
    }

    render() {
        return (
            <div>
                <div style={{ margin: '10px' }}>
                    <Input
                        value={this.state.inputValue}
                        style={{ width: '250px', marginRight: '10px' }}
                        onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.handleClick}>Add</Button>
                    <div style={{ margin: '10px', width: '300px' }}>
                        <List
                            bordered
                            dataSource={this.state.list}
                            renderItem={(item, index) => (
                                <List.Item onClick={this.handleDelete.bind(this, index)}>
                                    {item}
                                </List.Item>
                            )}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default TodoList;
