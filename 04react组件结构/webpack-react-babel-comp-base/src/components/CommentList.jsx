import React, { Component } from 'react'
import CommentItem from '@/components/CommentItem'

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
            <h1 className='comment-title'>这是评论组件</h1>
            {
                this.state.commentList.map(item =>
                    <CommentItem key={item.id} {...item}></CommentItem>
                )
            }
        </div>
    }

}

export default CommentList
