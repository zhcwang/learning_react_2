// webpack-dev-server 打包好的main.js托管到了内存中，所以在根目录中看不到
// 同时利用HtmlWebpackPlugin来实现代码的自动注入以及其它文件的内存加速


// 1. import React
import React from 'react' // 创建組件，虛擬DOM元素，生命周期
import ReactDOM from 'react-dom' // 把创建好的组件放在页面上展示
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import About from '@/components/About'
import User from '@/components/User'
import Home from '@/components/Home'
import Movie from '@/components/Movie'

ReactDOM.render(
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/movies/1/150">Movies</Link>
                    </li>
                </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/users">
                    <User />
                </Route>
                <Route path="/movies/:tid/:id" component={Movie}>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>,
    document.getElementById('app'))