import React,{Fragment}from "react"
import {Card,Row,Col} from "antd"
import {NavLink} from "react-router-dom"
import cnode from "../static/img/cnode.png"
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
                                style={{ width: 240,marginRight:"20px",marginTop:"20px"}}
                                cover={<img alt="example" src={cnode} style={{height:"300px",width:"240px"}}/>}
                            >
                                <Meta title="React 仿站cNode 响应式" description="www.qmj.fun/build" />
                            </Card>
                        </a>
                        </Col>
                        <Col>
                        <Card
                            hoverable
                            style={{ width: 240 ,marginRight:"20px",marginTop:"20px"}}
                            cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                        >
                            <Meta title="Europe Street beat" description="www.instagram.com" />
                        </Card>
                        </Col>
                        <Col>
                            <a href="http://www.qmj.fun">
                                <Card
                                        hoverable
                                        style={{ width: 240,marginRight:"20px",marginTop:"20px"}}
                                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                                    >
                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                </Card>
                            </a>
                        </Col>
                    </Row>
                </div>
            </div>
        </Fragment>
        
    )
}