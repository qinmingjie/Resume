import React,{Fragment}from "react"
import {Card,Row,Col} from "antd"
import {NavLink} from "react-router-dom"
import cnode from "../static/img/cnode.jpg"
import cloud from "../static/img/cloud.jpg"
import wx from "../static/img/wx.png"
const {Meta} = Card;
export default function Project(){
    return (
        <Fragment>
            <div id="project">
                <h1 style={{
                    textAlign:"center",
                    paddingTop:"15px"
                }}>作品集</h1>
                <div className="prowrap">
                    <Row id="projList" justify="center">
                        <Col>
                        <a href="http://www.qmj.fun/build">
                            <Card
                                hoverable
                                style={{ width:240,marginRight:"20px",marginTop:"20px"}}
                                cover={<img alt="example" src={cnode} />}
                            >
                                <Meta title="React 仿站cNode 响应式" description="www.qmj.fun/build" />
                            </Card>
                        </a>
                        </Col>
                        <Col>
                        <a href="https://github.com/qinmingjie/WxCloud.git">
                            <Card
                                hoverable
                                style={{ width: 240 ,marginRight:"20px",marginTop:"20px"}}
                                cover={<img alt="example" src={wx} style={{height:"300px"}}/>}
                            >
                                <Meta title="网易云音乐小程序" description="www.github.com/qinmingjie" />
                            </Card>
                        </a>
                        </Col>
                        <Col>
                            <a href="http://www.qmj.fun/cloud">
                                <Card
                                        hoverable
                                        style={{ width: 240,marginRight:"20px",marginTop:"20px"}}
                                        cover={<img alt="example" src={cloud} />}
                                    >
                                    <Meta title="基于React仿站网易云音乐" description="www.qmj.fun/build/cloud" />
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
    )
}