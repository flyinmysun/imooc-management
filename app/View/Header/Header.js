
import React from "react"
import "../../style/global.css"
import "./Header.css"
export default class Header extends React.Component{
    render(){
        return(
            <div className="topContainer clearfix">
                <div className="logoWrap">
                    <img  alt=""/>
                    <span>慕课网管理后台</span>
                </div>
                <div className="signWrap">
                    <span className="mr5">登录</span>
                    <span>|</span>
                    <span className="ml5">注册</span>
                </div>
            </div>
        )
    }
}