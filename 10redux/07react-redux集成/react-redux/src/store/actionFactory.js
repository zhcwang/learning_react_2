/**
 * Action工厂，把actionType和业务逻辑分离
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MYLIST } from './actionType'
import axios from 'axios'

export const getChangeInputAction = (value) => (
    {
        type: CHANGE_INPUT,
        value: value
    }
) 

export const getAddItemAction = () => (
    {
        type: ADD_ITEM
    }
) 

export const getDeleteItemAction = (index) => (
    {
        type: DELETE_ITEM,
        value: index
    }
) 

export const getListAction = (list) => (
    {
        type: GET_LIST,
        value: list
    }
) 


export const getTodoList = () => {
    return (dispatch)=>{
        axios
        .get('https://72074a10-cbed-4f90-98ae-2beb0bbef5e0.mock.pstmn.io/todos')
        .then((res) => {
            const data = res.data.data.list
            const action = getListAction(data)
            dispatch(action)
        })
    }
}

export const getMyListAction = () => ({
    type: GET_MYLIST
})