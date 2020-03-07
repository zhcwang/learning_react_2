/**
 * Action工厂，把actionType和业务逻辑分离
 */
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionType'


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