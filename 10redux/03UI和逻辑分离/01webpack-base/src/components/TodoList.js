import React, { Component } from 'react';

import store from '@/store'
import { getChangeInputAction, getAddItemAction, getDeleteItemAction } from '@/store/actionFactory'
import TodoListUI from './TodoListUI'

class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = store.getState()
        this.changeInputValue = this.changeInputValue.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleClick = this.handleClick.bind(this)
        // store 订阅state改变并处罚自己的重置state方法
        store.subscribe(() => this.setState(store.getState()))
       
    }

    changeInputValue = (e) => {
        store.dispatch(getChangeInputAction(e.target.value))
    }

    handleClick = () => {
        store.dispatch(getAddItemAction())
    }

    handleDelete = (e, index) => {
        // dispath action to store
        e.persist()
        store.dispatch(getDeleteItemAction(index))
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                changeInputValue={this.changeInputValue}
                handleClick={this.handleClick}
                list={this.state.list}
                handleDelete={this.handleDelete}
            />
        );
    }
}

export default TodoList;
