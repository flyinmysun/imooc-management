
import React from "react"
import "../../style/global.css"
import "./LeftWrap.css"
import { browserHistory } from 'react-router';
export default class LeftWrap extends React.Component{
    render(){
        return(
            <div className="leftWrap">
                <ul className="menuWrap">
                    <li>
                        <div className="firstMenu" onClick={()=>{
                            browserHistory.push("/home")
                        }}>
                            <span></span>
                            <span>首页</span>
                        </div>
                        <ul className="childMenu">
                            <li>实战</li>
                            <li>路径</li>
                            <li>猿问</li>
                        </ul>
                    </li>
                    <li>
                        <div className="firstMenu" onClick={()=>{
                            browserHistory.push("/course")
                        }}>
                            <span></span>
                            <span>课程信息</span>
                        </div>
                        <ul className="childMenu">
                            <li>实战</li>
                            <li>路径</li>
                            <li>猿问</li>
                        </ul>
                    </li>
                    <li>
                        <div className="firstMenu" onClick={()=>{
                            browserHistory.push("/teacher")
                        }}>
                            <span></span>
                            <span>教师信息</span>
                        </div>
                        <ul className="childMenu">
                            <li>实战</li>
                            <li>路径</li>
                            <li>猿问</li>
                        </ul>
                    </li>
                    <li>
                        <div className="firstMenu">
                            <span></span>
                            <span>个人信息</span>
                        </div>
                        <ul className="childMenu">
                            <li>实战</li>
                            <li>路径</li>
                            <li>猿问</li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}