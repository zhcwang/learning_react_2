import React, { Component } from 'react';

import { getChangeInputAction, getAddItemAction, getDeleteItemAction, getListAction, getTodoList, getMyListAction } from '@/store/actionFactory'
import TodoListUI from './TodoListUI'
import { connect } from 'react-redux'

class TodoList extends Component {

    render() {
        let { inputValue, changeInputValue, handleClick, list, handleDelete } = this.props

        return (
            <TodoListUI
                inputValue={inputValue}
                changeInputValue={changeInputValue}
                handleClick={handleClick}
                list={list}
                handleDelete={handleDelete}
            />
        );
    }

    componentDidMount() {
        let { init } = this.props
        init()
    }

}

const stateToProps = (state) => {
    let {inputValue, list} = state;
    return {
        inputValue: inputValue,
        list:list
    }
}

const dispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            dispatch(getChangeInputAction(e.target.value))
        },
        handleClick() {
            dispatch(getAddItemAction())
        },
        handleDelete(e, index) {
            e.persist()
            dispatch(getDeleteItemAction(index))
        },
        init() {
            dispatch(getMyListAction())
        },
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);
