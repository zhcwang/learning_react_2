import React, { Component } from 'react'

class CommentItem extends Component {

    constructor() {
        super()
    }

    render() {
        return <div>
            <h3>评论人：{this.props.user}</h3>
            <p>评论内容：{this.props.content}</p>
        </div>
    }

}

export default CommentItem
