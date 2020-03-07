import React, { Component } from 'react'
import CommentItem from '@/components/CommentItem'
// 这个样式表是只在List组件中生效的么？并且样式默认作用于全局上，整个项目都生效，.css没有文件作用域，会存在样式污染
import cssobj from '@/css/cmtlist.scss'
// cssobj = {}, css文件中不能写export，
console.log(cssobj)
// bootstrap
import 'bootstrap/dist/css/bootstrap'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            msg: '哈哈',
            name: '张三',
            input: '123'
        }
    }

    // 实例方法
    clickHandler = (arg1) => {
        console.log(this)
        this.setState({msg: arg1}, function(){
            console.log("回调：" + this.state.msg)
        })
        console.log("setState异步：" + this.state.msg)
    }

    changeHandler = (e) => {
        console.log(e)
        console.log(this.refs.test.value)
        this.setState({input: e.target.value})    
    }

    render() {
        return <div>
            {/* 箭头函数内部this指向外界的this，而不是本身所属于的类 */}
            <button className="btn btn-primary" onClick={() => this.clickHandler('arg1')}>按钮绑定事件2</ button>
            <h3>{this.state.msg}</h3>
            <h3>{this.state.name}</h3>

            <input value={this.state.input} onChange={(e) => this.changeHandler(e)} ref="test"></input>
            <p>{this.state.input}</p>
        </div>
    }

}

export default CommentList
