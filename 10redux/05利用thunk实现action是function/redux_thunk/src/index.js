
import React from 'react' // 创建組件，虛擬DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件放在页面上展示
import TodoList from '@/components/TodoList'

ReactDOM.render(<TodoList /> , document.getElementById('app'))