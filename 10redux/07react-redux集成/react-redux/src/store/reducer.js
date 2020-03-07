// inputValue 记录当前input内的输入
// list是当前的列表

const defaultStore = {
    inputValue : 'default value',
    list:[
       
    ]
}
/**
 * reducer means receive old state and action
 * use the action to caculate new state and return it (not change the old state)
 * reducer must be a pure function(always return the same result if the input params are the same)
 * this means you can't do ajax request there or use sine random function like new Date().
 */
import {ACTION_TYPE} from '@/store/actionType'

export default (state = defaultStore, action) => {
    //console.log(state, action)
    // Reducer里只能接收state，不能直接改变  state.list.push(value)
    if(action.type === ACTION_TYPE['CHANGE_INPUT']){
        let newState = {...state}
        newState.inputValue = action.value
        return newState 
    } else if (action.type ===  ACTION_TYPE['ADD_ITEM']){
        let newState = {...state}
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState 
    } else if (action.type ===  ACTION_TYPE['DELETE_ITEM']){
        let newState = window.JSON.parse(window.JSON.stringify(state))
        newState.list.splice(action.value, 1)
        return newState  
    } else if (action.type ===  ACTION_TYPE['GET_LIST']){
        let newState = {...state}
        newState.list = action.value
        return newState 
    } else {
        return state
    }
}