import React, {Component} from 'react'

class Hello2 extends Component {
    // 静态属性
    static info = 'aaa';
    // 实例属性不需要做声明，否则会报错，默认都放在this对象里面了

    constructor(){
        super()
        this.state = {
            msg: '大家好'
        }
        this.getName.bind(this);
    }

    getName = () => {
        return this.props.name
    }

    render(){
        // 不能修改props
        //this.props.name = '李四'
        this.state.msg = 'wangzhc'
        return <div>{'info:' + Hello2.info + ', props' + this.getName()}<h3>{this.state.msg}</h3></div>
    }

}

export default Hello2
