
import React from 'react' // 创建組件，虛擬DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件放在页面上展示
import TodoList from '@/components/TodoList'
import { Provider } from 'react-redux'
import store from '@/store'
const App1 = (
    <Provider store={store}>
        <TodoList />
    </Provider>
)

ReactDOM.render(App1, document.getElementById('app'))