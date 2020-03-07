// webpack-dev-server 打包好的main.js托管到了内存中，所以在根目录中看不到
// 同时利用HtmlWebpackPlugin来实现代码的自动注入以及其它文件的内存加速


// 1. import React
import React from 'react' // 创建組件，虛擬DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件放在页面上展示
import Hello1 from '@/components/Hello1'
import Hello2 from '@/components/Hello2'
import CommentList from '@/components/CommentList'


// 2. create virtual DOM
/**
 * @param the element type 
 * @param obj or null, DOM's attrs
 * @param sub DOM
 * @param ... sub DOM
 */
// <h1 id="myh1" title="this is a hi">This is a big h1</h1>
const myh1 = React.createElement('h1', {
    id: 'myh1',
    title: 'this is a hi'
}, 'This is a big h1');

const myDiv = React.createElement('div', null, "这是一个div元素", myh1)


// 3. render
/**
 * @param DOM to be rended
 * @param container 
 */
ReactDOM.render(myDiv, document.getElementById('app'))



// 4、the method to create DOM used above is too difficult to use
// so we can use JSX grammer and Babel to translate
const myTest = <div id="myTest" title="myTitle">可以借助babel直接渲染页面</div>

ReactDOM.render(myTest, document.getElementById('app'))

// 5、basic jsx uses
let a = 10
let str = '你好，中国！'
let bool = true
let title = 'p标签title'
const h2 = <h2>这里是h2</h2>
const arr = [
    <h3>h3</h3>,
    <h4>h4</h4>,
];

const strArr = ['zhangsan', 'lisi']

/* ReactDOM.render(<div>
    {a + 10}
    <hr />
    {str}
    <hr />
    {bool ? 'true' : 'false'}
    <hr />
    {bool.toString()}
    <p title={title}>p标签</p>
    <hr />
    {h2}
    <hr />
    {arr}
    <hr />
    {strArr.map(item => {
        return <h5 key={item}>{item}</h5>
    })}
    <hr />
    <p className='p-name'><label htmlFor='p-name'>label</label></p>
</div>, document.getElementById('app')) */


// 6、component
// 6.1 the simple way to create component
function Hello(props) {
    return <div>{props.name}</div>
}

const dog = {
    name: '大黄',
    age: 3,
    gender: '雄'
}

/* ReactDOM.render(<div>123<Hello name={dog.name}></Hello></div>, document.getElementById('app')) */

/* ReactDOM.render(<div>123<Hello {...dog}></Hello></div>, document.getElementById('app')) */
// 2、 the usual way to create components
/* ReactDOM.render(<div>123<Hello1 {...dog}></Hello1></div>, document.getElementById('app')) */
/* ReactDOM.render(<div><Hello2 {...dog}></Hello2></div>, document.getElementById('app')) */
ReactDOM.render(<div><CommentList></CommentList></div>, document.getElementById('app'))