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
            commentList: [
                { id: 1, user: '张三', content: '哈哈，沙发' },
                { id: 2, user: '李四', content: '哈哈，板凳' },
                { id: 3, user: '王五', content: '哈哈，凉席' },
                { id: 4, user: '赵六', content: '哈哈，砖头' },
                { id: 5, user: '田七', content: '哈哈，楼下山炮' }
            ]
        }
    }

    render() {
        return <div>
            <button className="btn btn-primary">按钮</ button>
            <div className="panel panel-primary">
                <h1 className={[cssobj.title, 'global'].join(' ')}>这是评论组件</h1>
                {
                    this.state.commentList.map(item =>
                        <CommentItem key={item.id} {...item}></CommentItem>
                    )
                }
            </div>
        </div>
    }

}

export default CommentList
