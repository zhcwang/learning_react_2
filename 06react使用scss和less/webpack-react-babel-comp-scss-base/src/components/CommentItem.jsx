import React, { Component } from 'react'
import cssobj from '@/css/cmtItem.scss'
// cssobj = {}, css文件中不能写export，
console.log(cssobj)

class CommentItem extends Component {

    constructor() {
        super()
    }

    render() {
        return <div className='cssobj.container'>
            <h3 style={{fontSize: '14px'}}>评论人：{this.props.user}</h3>
            <p className='cssobj.content'>评论内容：{this.props.content}</p>
        </div>
    }

}

export default CommentItem
