import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route,IndexRoute, hashHistory,browserHistory } from 'react-router';


import { Layout} from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Top from "./View/Header/Header"

class RootView extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header>
                        <Top/>
                    </Header>
                    <Layout>
                        <Sider>Sider</Sider>
                        <Content>内容</Content>
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


                </Route>
            </Router>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("root"))
