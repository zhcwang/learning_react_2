// inputValue 记录当前input内的输入
// list是当前的列表
const defaultStore = {
    inputValue : 'default value',
    list:[
        '早8点开晨会',
        '早9点开需求沟通会'
    ]
}

export default (state = defaultStore, action) => {
    console.log(state, action)
    // Reducer里只能接收state，不能直接改变  state.list.push(value)
    if(action.type === 'changeInput'){
        let newState = {...state};
        newState.inputValue = action.value;
        return newState 
    } else if (action.type === 'addItem'){
        let newState = {...state};
        newState.list.push(state.inputValue)
        newState.inputValue = ''
        return newState 
    } else if (action.type === 'deleteItem'){
        let newState = {...state}
        newState.list.splice(action.value, 1)
        return newState 
    }else {
        return state
    }
}