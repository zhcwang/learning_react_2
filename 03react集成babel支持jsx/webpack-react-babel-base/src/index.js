// webpack-dev-server 打包好的main.js托管到了内存中，所以在根目录中看不到
// 同时利用HtmlWebpackPlugin来实现代码的自动注入以及其它文件的内存加速


// 1. import React
import React from 'react' // 创建組件，虛擬DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件放在页面上暂时


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

const myDiv = React.createElement('div', null, "这是一个div元素", myh1);


// 3. render
/**
 * @param DOM to be rended
 * @param container 
 */
ReactDOM.render(myDiv, document.getElementById('app'));



// 4、the method to create DOM used above is too difficult to use
// so we can use JSX grammer and Babel to translate
const myTest = <div id="myTest" title="myTitle">可以借助babel直接渲染页面</div>

ReactDOM.render(myTest, document.getElementById('app'));
