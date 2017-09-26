import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';


import { Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Top from "./View/Header/Header"
import LeftWrap from "./View/LeftWrap/LeftWrap"
import Home from "./View/Home/Home"
import Course from "./View/Course/Course"
import Teacher from  "./View/Teacher/Teacher"

class RootView extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header>
                        <Top/>
                    </Header>
                    <Layout>
                        <Sider>
                            <LeftWrap/>
                        </Sider>
                        <Content>
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
            </div>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <Router history={browserHistory}>
                <Route path="/" component={RootView}>
                    <IndexRoute component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/course" component={Course}/>
                    <Route path="/teacher" component={Teacher}/>
                </Route>
            </Router>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"))
